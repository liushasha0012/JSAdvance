function bfs(root) {
    let res = [];
    let queue = [];
    if(!root) return res;
    queue.push(root);
    while(queue.length) {
        let node = queue.shift();
        res.push(node.val);
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return res;
}