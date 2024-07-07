import express from "express";
import zod from "zod";
const router = express.Router();
import User from "../models/userSchema";
import jwt from "jsonwebtoken";

const signupInput = zod.object({
  email: zod.string().min(1).max(20).email("This is not a valid email."),
  username: zod.string().min(1).max(20),
  password: zod.string().min(1).max(15),
  confirmPassword: zod.string().min(1).max(15),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  try {
    let parsedInput = signupInput.safeParse(req.body);
    if (!parsedInput.success) {
      return res.status(403).json({
        msg: parsedInput.error,
      });
    }
    const email = parsedInput.data.email;
    const username = parsedInput.data.username;
    const password = parsedInput.data.password;
    const confirmPassword = parsedInput.data.password;
    const firstName = parsedInput.data.password;
    const lastName = parsedInput.data.password;

    const existingUser = User.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
        success: false,
      });
    }

    const newUser = await User.create(req.body);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: "User Create Successfully",
      token,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});

export default router;
