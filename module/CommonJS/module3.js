let num = 1;
function incNum() {
    num++;
}

module.exports = {
    get num() {
        return num;
    },
    incNum
}