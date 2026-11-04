module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyId = req.body.monkeyId;
        if (monkeyId === undefined || monkeyId === null) {
            return next();
        }
        if (!Number.isInteger(monkeyId)) {
            return res.status(400).json({ error: 'monkeyId must be an integer' });
        }
        const monkey = objRep.monkeys.find(m => m.id === monkeyId);
        if (monkey === undefined) {
            return res.status(400).json({ error: 'Monkey does not exist' });
        }
        return next();
    };
};
