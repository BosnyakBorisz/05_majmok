module.exports = function (objRep) {
    return (req, res, next) => {
        const banana = res.locals.banana;

        objRep.bananaModel.remove(banana);
        objRep.db.saveDatabase();
        
        return next();
    };
};
