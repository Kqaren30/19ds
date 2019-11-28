class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class ubbTree {
    constructor(data) {
        this.root = new Node(data);
    }
    insert(data) {
        let queue = [];
        queue.push(this.root);
        while (true) {
            let node = queue.pop();
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else {
                queue.unshift(node.left);
            }
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else {
                queue.unshift(node.right);
            }
        }
    }


    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    bfs() {
        let node = this.root;
        const queue = [node];
        const finalData = []

        while (queue.length) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            finalData.push(node.data)
        }
        return finalData;
    }

}

let tree = new ubbTree(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
console.log(tree);
console.log(tree.bfs()); //[1,2,3,4,5]
console.log(tree.inOrder()); //4,2,5,1,3