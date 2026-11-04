module.exports = function (objRep) {
    return (req, res, next) => {
        console.table(objRep.monkeys);
        return res.json(objRep.monkeys);
    };
};
