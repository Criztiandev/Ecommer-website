import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../../models/user.model.ts";
import { UserSchema } from "../../interfaces/model.js";
import tokenUtils from "../../utils/token.utils.ts";

export default {
  login: asyncHandler(
    async (req: Request<{}, {}, UserSchema>, res: Response) => {
      const { email, password } = req.body;

      console.log(password);

      const _user = await userModel.findOne({ email }).select("password role");
      if (!_user) {
        throw new Error("User Doesnt Exist");
      }

      if (_user && (await _user.matchPassword(password))) {
        // generate token
        const accessToken = tokenUtils.generateToken(
          { UID: _user?._id as string, role: _user?.role, scope: null },
          { expiresIn: "15m" }
        );

        const refreshToken = tokenUtils.generateToken(
          { UID: _user?._id as string, role: _user?.role, scope: null },
          { expiresIn: "30d" }
        );

        tokenUtils.generateCookies(res, "accessToken", accessToken);
        tokenUtils.generateCookies(res, "refreshToken", refreshToken);

        res.status(200).json({
          payload: _user?._id,
        });
      } else {
        throw new Error("Password Incorrect, Please Try again");
      }
    }
  ),

  register: asyncHandler(
    async (req: Request<{}, {}, UserSchema>, res: Response) => {
      const { userName, email, password } = req.body;

      console.log(password);

      const user = await userModel
        .findOne({
          $or: [{ userName }, { email }],
        })
        .lean()
        .select("_id");

      if (user) throw new Error("User Already Exist Please Try again");

      const payload = await userModel.create({
        profileImg: req?.file?.filename,
        ...req.body,
      });
      if (!payload) throw new Error("Something went wrong, Please Try again");

      res.status(200).json({
        payload: payload?._id || "N/A",
      });
    }
  ),
};
