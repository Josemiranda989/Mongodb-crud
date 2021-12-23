import { Router } from 'express'
import Task from '../models/task'

const router = Router ()


router.get('/', (req, res) => {
  res.render('index')
})

router.post("/tasks/add", (req, res) => {
  const task = Task(req.body);
  console.log(task);
  res.send("añadiendo tarea");
});

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/edit', (req, res) => {
  res.render('edit')
})

export default router;