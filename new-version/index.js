const assert = require("assert");
const Node = require('./node');

const tree = new Node(
    "÷",
    null,
    new Node(
        "+",
        null,
        new Node("", 7, null, null),
        new Node(
            "x",
            null,
            new Node(
                "-",
                null,
                new Node("", 3, null, null),
                new Node("", 2, null, null)
            ),
            new Node("", 5, null, null)
        )
    ),
    new Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toLabel());
assert.strictEqual(2, tree.summary());