module.exports = function (objRep) {
    return (req, res, next) => {
        const foundIndex = res.locals.bananaIndex;

        if (typeof req.body.color === 'undefined' && typeof req.body.sweet === 'undefined' && typeof req.body.monkeyId === 'undefined') {
            return res.status(400).json({ error: 'Missing color, sweet or monkeyId!' });
        }

        if (typeof req.body.color !== 'undefined') objRep.bananas[foundIndex].color = req.body.color;
        if (typeof req.body.sweet !== 'undefined') objRep.bananas[foundIndex].sweet = req.body.sweet;
        if (typeof req.body.monkeyId !== 'undefined') objRep.bananas[foundIndex].monkeyId = req.body.monkeyId;

        res.locals.banana = objRep.bananas[foundIndex];
        return next();
    };
};
