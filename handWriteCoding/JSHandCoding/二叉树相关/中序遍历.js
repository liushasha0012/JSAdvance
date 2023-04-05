// 左中右
function inorderTraverse(root) {
    let res = [];
    if(!root) return null;
    let traverse = function(node) {
        if(node) {
            traverse(node.left);
            res.push(node.val);
            traverse(node.right);
        }
    }
    traverse(root);
    return res;
}