module.exports = function (objRep) {
    return (req, res, next) => {
        const bananaIdAsNumber = parseInt(req.params.id, 10);
        const foundIndex = objRep.bananas.findIndex(b => b.id === bananaIdAsNumber);

        if (foundIndex === -1) {
            return res.status(404).json({ Error: `Requested bananaID not found! ${req.params.id}` });
        }

        if (typeof req.body.color === 'undefined' && typeof req.body.sweet === 'undefined' && typeof req.body.monkeyId === 'undefined') {
            return res.status(400).json({ error: 'Missing color, sweet or monkeyId!' });
        }

        if (typeof req.body.color !== 'undefined') objRep.bananas[foundIndex].color = req.body.color;
        if (typeof req.body.sweet !== 'undefined') objRep.bananas[foundIndex].sweet = req.body.sweet;
        if (typeof req.body.monkeyId !== 'undefined') objRep.bananas[foundIndex].monkeyId = req.body.monkeyId;

        return res.status(200).json(objRep.bananas[foundIndex]);
    };
};
