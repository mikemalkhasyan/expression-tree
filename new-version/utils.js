// in utils.js we can store the app global and reusable helpers
const { SUPPORTED_OPERATORS } = require("./config");

// use Javascript Map objects to hold operator/label key-value pairs for future use
const supportedOperators = new Map(SUPPORTED_OPERATORS)
const supportedOperatorLabels = new Map(
    SUPPORTED_OPERATORS.map(
        ([operator]) => [operator, (left, right) => `(${left} ${operator} ${right})`]
    )
)

exports.operators = supportedOperators;
exports.operatorLabels = supportedOperatorLabels