module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyIdAsNumber = parseInt(req.params.id, 10);
        const foundIndex = objRep.monkeys.findIndex(m => m.id === monkeyIdAsNumber);

        if (foundIndex === -1) {
            return res.status(404).json({ Error: `Requested monkeyID not found! ${req.params.id}` });
        }

        if (typeof req.body.name === 'undefined' && typeof req.body.sex === 'undefined' && typeof req.body.species === 'undefined') {
            return res.status(400).json({ error: 'Missing name, sex or species' });
        }

        if (typeof req.body.name !== 'undefined') objRep.monkeys[foundIndex].name = req.body.name;
        if (typeof req.body.sex !== 'undefined') objRep.monkeys[foundIndex].sex = req.body.sex;
        if (typeof req.body.species !== 'undefined') objRep.monkeys[foundIndex].species = req.body.species;
        
        return res.status(200).json(objRep.monkeys[foundIndex]);
    };
};
