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

    const getMonkeys = require('../middleware/monkey/getMonkeys')(objRep);
    const getMonkey = require('../middleware/monkey/getMonkey')(objRep);
    const createMonkey = require('../middleware/monkey/createMonkey')(objRep);
    const updateMonkey = require('../middleware/monkey/updateMonkey')(objRep);
    const deleteMonkey = require('../middleware/monkey/deleteMonkey')(objRep);
    const deleteMonkeyBananas = require('../middleware/monkey/deleteMonkeyBananas')(objRep);

    const getBananas = require('../middleware/banana/getBananas')(objRep);
    const getBanana = require('../middleware/banana/getBanana')(objRep);
    const createBanana = require('../middleware/banana/createBanana')(objRep);
    const updateBanana = require('../middleware/banana/updateBanana')(objRep);
    const deleteBanana = require('../middleware/banana/deleteBanana')(objRep);
    const checkMonkeyId = require('../middleware/banana/checkMonkeyId')(objRep);


    app.get('/api/monkey', getMonkeys);
    app.post('/api/monkey', createMonkey);
    app.get('/api/monkey/:id', getMonkey);
    app.patch('/api/monkey/:id', updateMonkey);
    app.delete('/api/monkey/:id', deleteMonkeyBananas, deleteMonkey);

    app.get('/api/banana', getBananas); 
    app.post('/api/banana', checkMonkeyId, createBanana);
    app.get('/api/banana/:id', getBanana);
    app.patch('/api/banana/:id', checkMonkeyId, updateBanana);
    app.delete('/api/banana/:id', deleteBanana);
};
