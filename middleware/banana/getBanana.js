module.exports = function (objRep) {
    return (req, res, next) => {
        const banana = objRep.bananaModel.findOne({ id: req.params.id });

        if (!banana) {
            return res.status(404).json({ Error: `Requested bananaID not found! ${req.params.id}` });
        }

        res.locals.banana = banana;
        return next();
    };
};
