import jwt from "jsonwebtoken";
import Users from "../models/user";
import config from "../config/settings";

const { keyRefresh, keyGenerate } = config;

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(403)
        .json({ message: "No token exists, please log in again!" });
    }
    jwt.verify(token, keyGenerate, async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "The token is invalid, please log in again!" });
      }

      const findUser = await Users.findByPk(decoded.idUser);

      if (!findUser) {
        return res.status(400).json({ message: "User not found!" });
      }
      req.idUser = decoded.idUser;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const generateTokens = ({ idUser }) => {
  const accessToken = jwt.sign({ idUser }, keyGenerate, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign({ idUser }, keyRefresh, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};
