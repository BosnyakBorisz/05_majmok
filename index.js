require('dotenv').config(); 
const { initDatabase } = require('./service/db');
const express = require('express');
const addRoutes = require('./route'); 
const app = express();

app.use(express.json());

initDatabase((err, result) => {
    if (err) {
        return console.error(err);
    }
    const { db, monkeyModel, bananaModel } = result;

    addRoutes(app, db, monkeyModel, bananaModel);


    app.use((req, res) => {
        return res.status(404).json({
            error: `Endpoint or method not found: ${req.method} ${req.originalUrl}`
        });
    });

    const port = process.env.PORT || 3000;

    app.listen(port, function () {
        console.log(`Server running on http://localhost:${port}`);
    });
});
