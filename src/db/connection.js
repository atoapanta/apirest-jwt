import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import config from "../config/settings";

const {
  host,
  user,
  password,
  database,
  dialect,
  loggin,
  freezeTableName,
  max,
  min,
  acquire,
  idle,
  operatorsaliases,
} = config;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  dialectModule: mysql2,
  define: {
    freezeTableName,
  },
  pool: {
    max,
    min,
    acquire,
    idle,
  },
  operatorsaliases,
});

export default sequelize;
