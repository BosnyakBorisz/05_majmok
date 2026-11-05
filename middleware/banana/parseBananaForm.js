module.exports = function (objRep) {
    return (req, res, next) => {
        req.body.sweet = typeof req.body.sweet !== 'undefined' && req.body.sweet === 'on';

        if (req.body.monkeyId === '') {
            req.body.monkeyId = null;
        }

        return next();
    };
};
