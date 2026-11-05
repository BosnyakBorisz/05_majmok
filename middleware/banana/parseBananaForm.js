module.exports = function (objRep) {
    return (req, res, next) => {
        // Ha a checkbox 'on' szöveget küld, akkor true, minden más esetben (ha üres is) false lesz!
        req.body.sweet = typeof req.body.sweet !== 'undefined' && req.body.sweet === 'on';

        // Az üres gazdából null lesz
        if (req.body.monkeyId === '') {
            req.body.monkeyId = null;
        }

        return next();
    };
};
