import pkg from "bcrypt";
import { adminModel } from "../Database/models/Admin/Admin.js";
import {
  generateToken,
  verifyToken,
} from "../utils/TokenFunction/TokenFunction.js";
import { AppError } from "../utils/errorHandling/errorHandling.js";



export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await adminModel.findOne({ email, isEmailVerified: true });
  if (!user) {
    return next(new AppError("Invaild Email or Password", 400));
  }

  const isPasswordMatch = pkg.compareSync(password, user.password);

  if (!isPasswordMatch) {
    return next(new AppError("Invild Password", 400));
  }

  const token = generateToken({
    payload: {
      email,
      _id: user._id,
      role: user.role,
    },
    signature: process.env.SIGN_IN_TOKEN_SECRET,
    expiresIn: process.env.EXPIERSIN,
  });
  const cookieOptions = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  const updateUser = await userModel.findOneAndUpdate(
    { email },
    {
      $push: {
        tokens: {
          token,
          device: req.headers["user-agent"] || "unknown",
          createdAt: new Date(),
        },
      },
      status: "Online",
    },
    { new: true },
  );

  res.status(200).json({
    message: "login Successfully",
    updateUser,
  });
};
