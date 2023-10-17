import { config } from "dotenv";
config();

export default {
  //SETTING PORT RUN SERVER
  port: process.env.PORT || 7000,

  //SETTING CONECTION SEQUELIZE
  host: process.env.DATABASE_HOST || "127.0.0.1",
  // port: process.env.DATABASE_PORT || "3306",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "ambatotech",
  dialect: process.env.DIALECT_DATABASE || "mysql",
  loggin: process.env.LOGGING_DATABASE || false,
  freezeTableName: process.env.FREEZETABLENAME_DATABASE || true,
  max: process.env.MAX_POOL_DATABASE || 5,
  min: process.env.MIN_POOL_DATABASE || 0,
  acquire: process.env.ACQUIRE_POOL_DATABASE || 30000,
  idle: process.env.IDLE_POOL_DATABASE || 10000,
  operatorsaliases: process.env.OPERATORSALIASES_POOL_DATABASE || 0,

  //ACCESS KEY JWT
  keyGenerate: process.env.KEY_GENERATE || "generate",
  keyRefresh: process.env.KEY_REFRESH || "refresh",
};
