module.exports = function (app) {
    const objRep = {
        monkeys: [
            { id: 1, name: 'Joe', sex: 'male', species: 'gibbon' },
            { id: 2, name: 'Josephine', sex: 'female', species: 'gorilla' },
            { id: 3, name: 'Lajos', sex: 'male', species: 'orangutan' }
        ],
        bananas: [
            { id: 1, color: "yellow", sweet: false, monkeyId: null },
            { id: 2, color: "yellow", sweet: true, monkeyId: null },
            { id: 3, color: "green", sweet: true, monkeyId: null }, 
            { id: 4, color: "green", sweet: false, monkeyId: null }
        ],
        globalMonkeyId: 4,
        globalBananaId: 5
    };

    const getMonkeysMW = require('../middleware/monkey/getMonkeys')(objRep);
    const getMonkeyMW = require('../middleware/monkey/getMonkey')(objRep);
    const createMonkeyMW = require('../middleware/monkey/createMonkey')(objRep);
    const updateMonkeyMW = require('../middleware/monkey/updateMonkey')(objRep);
    const deleteMonkeyMW = require('../middleware/monkey/deleteMonkey')(objRep);
    const deleteMonkeyBananasMW = require('../middleware/monkey/deleteMonkeyBananas')(objRep);

    const getBananasMW = require('../middleware/banana/getBananas')(objRep);
    const getBananaMW = require('../middleware/banana/getBanana')(objRep);
    const createBananaMW = require('../middleware/banana/createBanana')(objRep);
    const updateBananaMW = require('../middleware/banana/updateBanana')(objRep);
    const deleteBananaMW = require('../middleware/banana/deleteBanana')(objRep);
    const checkMonkeyIdMW = require('../middleware/banana/checkMonkeyId')(objRep);

    app.get('/api/monkey', getMonkeysMW, (req, res, next) => res.json(res.locals.monkeys));
    app.post('/api/monkey', createMonkeyMW, (req, res, next) => res.status(201).json(res.locals.monkey));
    app.get('/api/monkey/:id', getMonkeyMW, (req, res, next) => res.json(res.locals.monkey));
    app.patch('/api/monkey/:id', getMonkeyMW, updateMonkeyMW, (req, res, next) => res.json(res.locals.monkey));
    app.delete('/api/monkey/:id', getMonkeyMW, deleteMonkeyBananasMW, deleteMonkeyMW, (req, res, next) => res.json(res.locals.monkey));

    app.get('/api/banana', getBananasMW, (req, res, next) => res.json(res.locals.bananas)); 
    app.post('/api/banana', checkMonkeyIdMW, createBananaMW, (req, res, next) => res.status(201).json(res.locals.banana));
    app.get('/api/banana/:id', getBananaMW, (req, res, next) => res.json(res.locals.banana));
    app.patch('/api/banana/:id', getBananaMW, checkMonkeyIdMW, updateBananaMW, (req, res, next) => res.json(res.locals.banana));
    app.delete('/api/banana/:id', getBananaMW, deleteBananaMW, (req, res, next) => res.json(res.locals.banana));
};
