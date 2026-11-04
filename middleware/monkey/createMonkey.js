module.exports = function (objRep) {
    return (req, res, next) => {
        if (typeof req.body.name === 'undefined' || typeof req.body.sex === 'undefined' || typeof req.body.species === 'undefined') {
            return res.status(400).json({ Error: `Missing name, sex or species` });
        }
        
        const newMonkey = {
            id: objRep.uuid.v4(),
            name: req.body.name,
            sex: req.body.sex,
            species: req.body.species
        };
        
        objRep.monkeyModel.insert(newMonkey);
        objRep.db.saveDatabase();
        
        res.locals.monkey = newMonkey;
        return next();
    };
};
