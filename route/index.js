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
const parseBananaFormMW = require('../middleware/banana/parseBananaForm');

const renderMW = require('../middleware/render');

function addRoutes(app, db, monkeyModel, bananaModel) {
    
    const objRep = {
        db,
        monkeyModel,
        bananaModel,
        uuid
    };

    //böngésző
    app.get('/', (req, res, next) => res.redirect('/monkey')); 
    app.get('/monkey', getMonkeysMW(objRep), getBananasMW(objRep), renderMW(objRep, 'monkeys')); 
    app.get('/monkey/new', renderMW(objRep, 'monkeyform'));
    app.post('/monkey/new', createMonkeyMW(objRep), (req, res, next) => res.redirect('/monkey'));
    app.get('/monkey/delete/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep), (req, res, next) => res.redirect('/monkey'));
    app.get('/monkey/edit/:id', getMonkeyMW(objRep), renderMW(objRep, 'monkeyform'));
    app.post('/monkey/edit/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep), (req, res, next) => res.redirect('/monkey'));


    app.get('/banana', getBananasMW(objRep), getMonkeysMW(objRep), renderMW(objRep, 'bananas'));
    app.get('/banana/new', getMonkeysMW(objRep), renderMW(objRep, 'bananaform'));
    app.get('/banana/delete/:id', getBananaMW(objRep), deleteBananaMW(objRep), (req, res, next) => res.redirect('/banana'));
    app.get('/banana/edit/:id', getBananaMW(objRep), getMonkeysMW(objRep), renderMW(objRep, 'bananaform'));
    app.post('/banana/new', parseBananaFormMW(objRep), checkMonkeyIdMW(objRep), createBananaMW(objRep), (req, res, next) => res.redirect('/banana'));
    app.post('/banana/edit/:id', getBananaMW(objRep), parseBananaFormMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep), (req, res, next) => res.redirect('/banana'));

    //json
    app.get('/api/monkey', getMonkeysMW(objRep), (req, res, next) => res.json(res.locals.monkeys));
    app.post('/api/monkey', createMonkeyMW(objRep), (req, res, next) => res.status(201).json(res.locals.monkey));
    app.get('/api/monkey/:id', getMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));
    app.delete('/api/monkey/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));
    app.patch('/api/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep), (req, res, next) => res.json(res.locals.monkey));

    app.get('/api/banana', getBananasMW(objRep), (req, res, next) => res.json(res.locals.bananas));
    app.post('/api/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep), (req, res, next) => res.status(201).json(res.locals.banana));
    app.get('/api/banana/:id', getBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
    app.delete('/api/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
    app.patch('/api/banana/:id', checkMonkeyIdMW(objRep), updateBananaMW(objRep), (req, res, next) => res.json(res.locals.banana));
}

module.exports = addRoutes;