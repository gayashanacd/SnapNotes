import { Request, Response } from "express"; 
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../models/todo.model";

let todos : Todo[] = [];

export const getTodos = ( req : Request, res : Response ) => {
    res.json(todos);
}

export const addTodo = ( req : Request, res : Response ) => {
    const { text } = req.body;
    const newTodo = { id : uuidv4(), text, completed : false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
}

export const toggleToDo = ( req : Request, res : Response ) => {
    const { id } = req.params;
    const toDo = todos.find( t => t.id === id );

    if(toDo){
        toDo.completed = !toDo.completed;
        res.json(toDo);
    }
    else {
        res.status(404).json({ message : "Todo item not found !" });
    }
}