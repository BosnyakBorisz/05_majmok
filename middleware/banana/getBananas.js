module.exports = function (objRep) {
    return (req, res, next) => {
        console.table(objRep.bananas);
        res.locals.bananas = objRep.bananas;
        return next();
    };
};
