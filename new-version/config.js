// config.js file will help program to be more configurable ...
// ... by adding the app global configurations, constants, additional settings

const SUPPORTED_OPERATORS = [
    ['+', (left, right) => left + right],
    ['-', (left, right) => left - right],
    ['x', (left, right) => left * right],
    ['÷', (left, right) => left / right],
]

exports.SUPPORTED_OPERATORS = SUPPORTED_OPERATORS
