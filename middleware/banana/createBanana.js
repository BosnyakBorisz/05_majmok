module.exports = function (objRep) {
    return (req, res, next) => {
        if (typeof req.body.color === 'undefined' || typeof req.body.sweet === 'undefined') {
            return res.status(400).json({ Error: `Missing color or sweet` });
        }
        
        const newBanana = {
            id: objRep.uuid.v4(), 
            color: req.body.color,
            sweet: req.body.sweet,
            monkeyId: req.body.monkeyId ?? null
        };

        objRep.bananaModel.insert(newBanana);
        objRep.db.saveDatabase();
        
        res.locals.banana = newBanana;
        return next();
    };
};
