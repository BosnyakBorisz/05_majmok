module.exports = function (objRep) {
    return (req, res, next) => {
        const allBananas = objRep.bananaModel.find();
        console.table(allBananas);
        
        res.locals.bananas = allBananas;
        return next();
    };
};
