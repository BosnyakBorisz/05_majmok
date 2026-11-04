module.exports = function (objRep) {
    return (req, res, next) => {
        const monkeyIdAsNumber = parseInt(req.params.id, 10);
        
        for (let i = objRep.bananas.length - 1; i >= 0; i--) {
            if (objRep.bananas[i].monkeyId === monkeyIdAsNumber) {
                objRep.bananas.splice(i, 1);
            }
        }
        return next();
    };
};
