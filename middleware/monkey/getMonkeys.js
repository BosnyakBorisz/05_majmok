module.exports = function (objRep) {
    return (req, res, next) => {
        console.table(objRep.monkeys);
        res.locals.monkeys = objRep.monkeys;
        return next();
    };
};
