module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyId = req.body.monkeyId;
    
        if (monkeyId === undefined || monkeyId === null || monkeyId === '') {
            return next();
        }
        
        if (typeof monkeyId !== 'string') {
            return res.status(400).json({ error: 'monkeyId must be a string (UUID)' });
        }

        const monkey = objRep.monkeyModel.findOne({ id: monkeyId });
        if (!monkey) {
            return res.status(400).json({ error: 'Monkey does not exist' });
        }
        
        return next();
    };
};
