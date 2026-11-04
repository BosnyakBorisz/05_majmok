module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyIdAsNumber = parseInt(req.params.id, 10);
        const foundIndex = objRep.monkeys.findIndex(m => m.id === monkeyIdAsNumber);

        if (foundIndex === -1) {
            return res.status(404).json({ Error: `Requested monkeyID not found! ${req.params.id}` });
        }

        const deletedMonkeyById = objRep.monkeys[foundIndex];
        objRep.monkeys.splice(foundIndex, 1);
        return res.status(200).json({ deletedMonkeyById });
    };
};
