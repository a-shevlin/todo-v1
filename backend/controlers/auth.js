import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import createError from '../utils/createError.js';
import 'dotenv/config.js';

// REGISTER CONTOLLER
export const register = async (req, res, next) => {
  // check for all fields
  if(!req.body.username || !req.body.fullName || !req.body.email || !req.body.password) {
    return next(createError({ status: 400, message: 'Username, Full Name, Email, and Password Required'}));
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashPass,
    });
    await newUser.save();
    return res.status(201).json('New User Created');
  } catch(err) {
    console.log(err);
    return next(err);
  }
}

// LOGIN CONTROLLER
export const login = async (req, res, next) => {
  // check for required fields
  if(!req.body.username || !req.body.password ) {
    return next(createError({ status: 400, message: 'Username and Password are required.'}));
  }
  // find user in db
  try{
    const user = await User.findOne({username: req.body.username}).select(
      'username fullName email password'
    );
    if(!user) {
      return next(createError({ status: 404, message: 'No User Found'}));
    }
    // check existing user with inputted password
    const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password); 
    if (!isPasswordCorrect) {
      return next(createError({ status: 400, message: 'Password is Incorrect'}));
    }
    const payload = {
      id: user._id,
      username: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    return res.cookie('access_token', token, {
      httpOnly: true,
    }).status(200)
    .json({
      'message': "login success",
    });
  } catch(err) {
    console.log(err);
    return next(err);
  }
}

// LOGOUT CONTROLLER
export const logout = (req, res, next) => {
  res.clearCookie('access_token');
  return res.status(200).json({ message: 'Logout Success'});
}

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies.access_token;
  if(!token) {
    return res.json(false);
  }
  return jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if(err) {
      return res.json(false);
    } else {
      return res.json(true);
    }
  });
};