module.exports = function (objRep) {
    return (req, res, next) => {
        const foundIndex = res.locals.monkeyIndex;

        res.locals.monkey = objRep.monkeys[foundIndex];
        objRep.monkeys.splice(foundIndex, 1);
        return next();
    };
};
