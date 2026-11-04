module.exports = function (objRep) {
    return (req, res, next) => {
        const foundIndex = res.locals.monkeyIndex;

        if (typeof req.body.name === 'undefined' && typeof req.body.sex === 'undefined' && typeof req.body.species === 'undefined') {
            return res.status(400).json({ error: 'Missing name, sex or species' });
        }

        if (typeof req.body.name !== 'undefined') objRep.monkeys[foundIndex].name = req.body.name;
        if (typeof req.body.sex !== 'undefined') objRep.monkeys[foundIndex].sex = req.body.sex;
        if (typeof req.body.species !== 'undefined') objRep.monkeys[foundIndex].species = req.body.species;
        
        res.locals.monkey = objRep.monkeys[foundIndex];
        return next();
    };
};
