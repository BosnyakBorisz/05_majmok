module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyID = res.locals.monkey ? res.locals.monkey.id : null;
        
        if (monkeyID) {
            objRep.bananaModel.chain().find({ monkeyId: monkeyID }).remove();
        }
        
        return next();
    };
};
