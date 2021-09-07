function cb1(a) {
    console.log(`${a}===`, a);
}
function fn(cb, b) {
    let m = 1;
    let n = 2;
    console.log(m+n);
    cb(b);
}
fn(cb1, 3);