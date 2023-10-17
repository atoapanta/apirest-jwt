import { DataTypes } from "sequelize";
import uuid from "short-uuid";
import sequelize from "../db/connection";
import Tasks from "./task";

const Users = sequelize.define("user", {
  idUser: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    defaultValue: 1,
  },
});

Users.beforeCreate((user) => {
  user.idUser = uuid.generate();
});

export default Users;
