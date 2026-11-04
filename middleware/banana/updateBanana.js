module.exports = function (objRep) {
    return (req, res, next) => {
        const banana = res.locals.banana;

        if (typeof req.body.color === 'undefined' && typeof req.body.sweet === 'undefined' && typeof req.body.monkeyId === 'undefined') {
            return res.status(400).json({ error: 'Missing color, sweet or monkeyId!' });
        }

        if (typeof req.body.color !== 'undefined') banana.color = req.body.color;
        if (typeof req.body.sweet !== 'undefined') banana.sweet = req.body.sweet;
        if (typeof req.body.monkeyId !== 'undefined') banana.monkeyId = req.body.monkeyId;

        objRep.bananaModel.update(banana);
        objRep.db.saveDatabase();

        res.locals.banana = banana;
        return next();
    };
};
