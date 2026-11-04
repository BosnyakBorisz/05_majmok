module.exports = function (objRep) {
    return (req, res, next) => {
        const foundIndex = res.locals.bananaIndex;

        res.locals.banana = objRep.bananas[foundIndex];
        objRep.bananas.splice(foundIndex, 1);
        return next();
    };
};
