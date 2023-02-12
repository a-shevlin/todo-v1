import User from "../models/User.js";

// USER GET DATA
export const getUserInfo = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.id).select('username fullName email');
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

// USER UPDATE USERNAME && EMAIL
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
      username: req.body.username,
      email: req.body.email,
    }, {
      new: true,
    }).select('username email');
    return res.status(200).json(updatedUser);
  } catch(err) {
    return next(err);
  }
}