import Task from "../models/task";
import Users from "../models/user";

export const findAllTasks = async (req, res) => {
  const { idUser } = req;
  try {
    const tasks = await Task.findAll({
      where: { idUser },
      include: [
        {
          model: Users,
          attributes: ["email"],
        },
      ],
      raw: true,
    });
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const findOneTask = async (req, res) => {
  const { idUser } = req;

  try {
    const task = await Task.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ["email"],
        },
      ],
      raw: true,
    });

    if (task) {
      if (task.idUser === idUser) {
        return res.status(200).json(task);
      } else {
        return res
          .status(401)
          .json({ message: "You are not authorized to access this task." });
      }
    } else {
      return res.status(404).json({ message: "Task not found!" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const createTask = async (req, res) => {
  const { idUser } = req;
  try {
    const userTasks = await Task.findAll({ where: { idUser } });
    if (userTasks.length > 5) {
      return res
        .status(400)
        .json({ message: "You have reached the maximum number of tasks." });
    }
    await Task.create({ ...req.body, idUser });
    return res.status(201).json({ message: "Registered task completed!" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { idUser } = req;
  try {
    const resource = await Task.findByPk(req.params.id);
    if (resource) {
      if (resource.idUser === idUser) {
        await resource.update(req.body);
        return res.status(200).json({ message: "Task update complete!" });
      } else {
        return res
          .status(401)
          .json({ message: "You are not authorized to update this task." });
      }
    } else {
      return res.status(404).json({ message: "Task not found!" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { idUser } = req;
  try {
    const resource = await Task.findByPk(req.params.id);
    if (resource) {
      if (resource.idUser === idUser) {
        await resource.destroy();
        return res.status(200).json({ message: "Task delete!" });
      } else {
        return res
          .status(401)
          .json({ message: "You are not authorized to delete this task." });
      }
    } else {
      return res.status(404).json({ message: "Task not found!" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
