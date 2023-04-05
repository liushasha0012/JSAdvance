// 使用递归
function dfs(root) {
    let deep=0;
    let leftDeep = 0;
    let rightDeep = 0;
    if(!root) return deep;
    leftDeep = 1+dfs(root.left);
    rightDeep = 1+dfs(node.right);
    deep = Math.max(leftDeep, rightDeep);
    return deep;
}