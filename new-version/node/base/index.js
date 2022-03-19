const { operators, operatorLabels } = require('../../utils');

class NodeBase {
    constructor() {
        if (new.target === NodeBase) {
            throw new TypeError("Cannot construct NodeBase instances directly");
        }

        this.supportedOperators = operators;
        this.supportedOperatorLabels = operatorLabels;
    }
}

module.exports = NodeBase;