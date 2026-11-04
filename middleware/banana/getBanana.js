module.exports = function (objRep) {
    return (req, res, next) => {
        const bananaIdAsNumber = parseInt(req.params.id, 10);
        const foundIndex = objRep.bananas.findIndex(b => b.id === bananaIdAsNumber);

        if (foundIndex === -1) {
            return res.status(404).json({ Error: `Requested bananaID not found! ${req.params.id}` });
        }

        return res.status(200).json(objRep.bananas[foundIndex]);
    };
};
