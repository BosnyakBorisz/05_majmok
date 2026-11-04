module.exports = function (objRep) {
    return (req, res, next) => {
        const monkey = res.locals.monkey;

        objRep.monkeyModel.remove(monkey);
        objRep.db.saveDatabase();
        
        return next();
    };
};
