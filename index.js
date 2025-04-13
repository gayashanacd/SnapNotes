const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.listen(PORT, ()=>{
    console.log('App strated..');
    console.log(`Server is running on port : ${PORT}`);
});