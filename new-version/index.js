const assert = require("assert");
const Node = require('./node');

const tree = new Node({
    operator: "÷",
    left: new Node({
        operator: "+",
        left: new Node({ value: 7 }),
        right: new Node({
            operator: "x",
            left: new Node({
                operator: "-",
                left: new Node({ value: 3 }),
                right: new Node({ value: 2 })
            }),
            right: new Node({ value: 5 })
        })
    }),
    right: new Node({ value: 6 })
})

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toLabel());
assert.strictEqual(2, tree.summary());