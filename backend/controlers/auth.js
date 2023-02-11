import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import 'dotenv/config.js';

export const register = async (req, res) => {
  // check for all fields
  if(!req.body.username || !req.body.fullName || !req.body.email || !req.body.password) {
    return res.json(`username, fullName, email, and password fields required`);
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
    return res.json('server error');
  }
}

export const login = async (req, res) => {
  // check for required fields
  if(!req.body.username || !req.body.password ) {
    return res.json('required field username and password');
  }
  // find user in db
  try{
    const user = await User.findOne({username: req.body.username}).select(
      'username fullName email password'
    );
    if(!user) {
      return res.status(404).json('user not found');
    }
    // check existing user with inputted password
    const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password); 
    if (!isPasswordCorrect) {
      return res.json('password incorrect');
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
    return res.json('server error')
  }
}