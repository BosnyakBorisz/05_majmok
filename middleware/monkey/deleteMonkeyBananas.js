module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyID = res.locals.monkey ? res.locals.monkey.id : null;
        
        if (monkeyID) {
            for (let i = objRep.bananas.length - 1; i >= 0; i--) {
                if (objRep.bananas[i].monkeyId === monkeyID) {
                    objRep.bananas.splice(i, 1);
                }
            }
        }
        return next();
    };
};
