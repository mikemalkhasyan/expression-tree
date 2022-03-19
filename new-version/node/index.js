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

    // Calculate the summary of the given nodes
    summary() {
        if (
            null !== this.operator &&
            this.supportedOperators.has(this.operator)
        ) {
            const operatorFunc = this.supportedOperators.get(this.operator);
            return operatorFunc(this.left.summary(), this.right.summary());
        }

        return this.value;
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