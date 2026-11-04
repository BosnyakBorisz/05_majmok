module.exports = function (objRep) {
    return (req, res, next) => {
        const monkey = objRep.monkeyModel.findOne({ id: req.params.id });

        if (!monkey) {
            return res.status(404).json({ Error: `Requested monkeyID not found! ${req.params.id}` });
        }

        res.locals.monkey = monkey;
        return next();
    };
};
