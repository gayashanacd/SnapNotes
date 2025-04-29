import express from "express";
import cors from "cors";
import toDoRoutes from "./routes/todo.routes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(toDoRoutes);
app.use(errorHandler);


// Routes
app.listen(PORT, ()=>{
    console.log('App strated..');
    console.log(`Server is running on http://localhost: ${PORT}`);
});