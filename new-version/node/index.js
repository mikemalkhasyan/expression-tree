const NodeBase = require('./base');

class Node extends NodeBase {
    constructor(
        operator = null,
        value,
        left,
        right
    ) {
        super()
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    }

    // In old version this method called as toString() that is not correct ->
    // because it's javascript objects core method name, that might cause serious bugs going forward
    // So, I renamed it to be called as 'toLabel'
    toLabel() {
        if (
            null !== this.operator &&
            this.supportedOperatorLabels.has(this.operator)
        ) {
            const operatorLabelFunc = this.supportedOperatorLabels.get(this.operator);
            return operatorLabelFunc(this.left.toLabel(), this.right.toLabel());
        }

        return this.value;
    }
}

module.exports = Node;