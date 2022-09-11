export default class Node {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const last = (arr) => {
    return ([arr]);
};
const vally = last('hey');
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = c;
c.right = e;
e.right = f;
//stack pop/push
const depthFirst = (root) => {
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current?.val);
        if (current?.left != null)
            stack.push(current.left);
        if (current?.right != null)
            stack.push(current.right);
    }
};
depthFirst(a);