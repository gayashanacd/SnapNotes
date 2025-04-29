import { Router } from "express";
import { getTodos, addTodo, toggleToDo } from "../controllers/todo.controller";

const router = Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', toggleToDo);

export default router;