import Users from "../models/user";
import bcrypt from "bcryptjs";
import { generateTokens } from "../middlewares/auth";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Incorrect email or password!" });
    }

    const createdUsed = await Users.findOne({ where: { email } });

    if (createdUsed) {
      if (createdUsed.email === email)
        return res.status(400).json({ message: "Email already exist!" });
    }
    await Users.create({
      email,
      password: await bcrypt.hash(password, 10),
    });
    return res.status(201).json({ message: "Successful registration!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password!" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect email or password!" });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .json({ accessToken });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
