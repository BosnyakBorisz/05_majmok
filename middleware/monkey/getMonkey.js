module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyIdAsNumber = parseInt(req.params.id, 10);
        const foundIndex = objRep.monkeys.findIndex(m => m.id === monkeyIdAsNumber);

        if (foundIndex === -1) {
            return res.status(404).json({ Error: `Requested monkeyID not found! ${req.params.id}` });
        }

        res.locals.monkeyIndex = foundIndex;
        res.locals.monkey = objRep.monkeys[foundIndex];
        return next();
    };
};
