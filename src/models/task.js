import { DataTypes } from "sequelize";
import uuid from "short-uuid";
import sequelize from "../db/connection";
import Users from "./user";

const Tasks = sequelize.define("task", {
  idTask: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assigned: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  appointment: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Tasks.beforeCreate((task) => {
  task.idTask = uuid.generate();
});

Tasks.belongsTo(Users, { foreignKey: "idUser" });

export default Tasks;
