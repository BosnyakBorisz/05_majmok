require('dotenv').config(); 
const express = require('express');
const app = express();                       

const addRoutes = require('./route/index.js');

app.use(express.json());                    

addRoutes(app);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();   
    }
    res.status(404).json({
        error: 'Not found',
        method: req.method,
        path: req.originalUrl
    });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server running on http://localhost:${port}`);
});
