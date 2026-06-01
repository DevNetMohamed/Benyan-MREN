import { userModel } from "../../../Database/Models/User/User.Model.js";
import { AppError } from "../../utils/errorHandling/errorhandling.js";
import {
  generateToken,
  verifyToken,
} from "../../utils/TokenFunction/TokenFunction.js";

export const isAuth = (roles) => {
  return async (req, res, next) => {
    try {
      let token = req.cookies?.jwt;

      if (!token && req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return next(new AppError("Please login first", 401));
      }

      try {
        const decodedData = verifyToken({
          token,
          signature: process.env.SIGN_IN_TOKEN_SECRET,
        });

        const findUser = await userModel.findById(
          decodedData._id,
          "email userName role addresses"
        );

        if (!findUser) {
          return next(new AppError("Please SignUp", 400));
        }

        if (!roles.includes(findUser.role)) {
          return next(new AppError("Unauthorized to access this api", 401));
        }

        req.authUser = findUser;
        next();

      } catch (error) {
        if (error == "TokenExpiredError: jwt expired") {
          const user = await userModel.findOne({ token });
          if (!user) {
            return next(new AppError("Wrong token", 400));
          }

          const userToken = generateToken({
            payload: { email: user.email, _id: user._id },
            signature: process.env.SIGN_IN_TOKEN_SECRET,
            expiresIn: "7d",
          });

          if (!userToken) {
            return next(new AppError("token generation fail", 400));
          }

          await userModel.findOneAndUpdate({ token }, { token: userToken });

          res.cookie("jwt", userToken, {
            httpOnly: true,
            expire: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
          });

          return res.status(200).json({ message: "Token refreshed", token: userToken });
        }
        return next(new AppError("invalid token", 500));
      }

    } catch (error) {
      next(new AppError("catch error in auth", 500));
    }
  };
};