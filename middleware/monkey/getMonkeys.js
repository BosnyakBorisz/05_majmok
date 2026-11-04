module.exports = function (objRep) {
    return (req, res, next) => {
        const allMonkeys = objRep.monkeyModel.find();
        console.table(allMonkeys);
        
        res.locals.monkeys = allMonkeys;
        return next();
    };
};
