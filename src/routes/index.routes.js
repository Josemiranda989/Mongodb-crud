import { Router } from 'express'

import {
  renderTask,
  createTask,
  renderEdit,
  editTask,
  deleteTask,
  toggleDone
} from "../controllers/task.controller";

const router = Router ()


router.get('/', renderTask)

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderEdit);

router.post("/edit/:id",editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;