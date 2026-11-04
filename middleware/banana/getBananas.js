module.exports = function (objRep) {
    return (req, res, next) => {
        console.table(objRep.bananas);
        return res.json(objRep.bananas);
    };
};
