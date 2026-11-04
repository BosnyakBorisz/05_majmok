const uuid = require('uuid');

const getMonkeysMW = require('../middleware/monkey/getMonkeys');
const getMonkeyMW = require('../middleware/monkey/getMonkey');
const createMonkeyMW = require('../middleware/monkey/createMonkey');
const deleteMonkeyMW = require('../middleware/monkey/deleteMonkey');
const updateMonkeyMW = require('../middleware/monkey/updateMonkey');
const deleteMonkeyBananasMW = require('../middleware/monkey/deleteMonkeyBananas');

const getBananasMW = require('../middleware/banana/getBananas');
const getBananaMW = require('../middleware/banana/getBanana');
const createBananaMW = require('../middleware/banana/createBanana');
const updateBananaMW = require('../middleware/banana/updateBanana');
const deleteBananaMW = require('../middleware/banana/deleteBanana');
const checkMonkeyIdMW = require('../middleware/banana/checkMonkeyId');

function addRoutes(app, db, monkeyModel, bananaModel) {
    
    const objRep = {
        db,
        monkeyModel,
        bananaModel,
        uuid, 
        bananas: [
            { id: 1, color: "yellow", sweet: false, monkeyId: null },
            { id: 2, color: "yellow", sweet: true, monkeyId: null },
            { id: 3, color: "green", sweet: true, monkeyId: null }, 
            { id: 4, color: "green", sweet: false, monkeyId: null }
        ],
        globalBananaId: 5
    };

    app.get('/api/monkey', getMonkeysMW(objRep), (req, res, next) => res.json(res.locals.monkeys));
    app.post('/api/monkey', createMonkeyMW(objRep), (req, res, next) => res.status(201).json(res.locals.monkey));
    app.get('/api/monkey/:id', getMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));
    app.patch('/api/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));
    app.delete('/api/monkey/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));

    app.get('/api/banana', getBananasMW(objRep), (req, res, next) => res.json(res.locals.bananas)); 
    app.post('/api/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep), (req, res, next) => res.status(201).json(res.locals.banana));
    app.get('/api/banana/:id', getBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
    app.patch('/api/banana/:id', getBananaMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
    app.delete('/api/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
}

module.exports = addRoutes;
