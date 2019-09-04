/**
 *  累加函数
 * @author KK 2019-09-04
 * @param {*} a 累加的第一个数值
 * @param {*} b 累加的第二个数值
 * @returns 累加的结果
 */

function test(a, b) {
  //todo
  return a + b;
}
//generator函数
function* generator() {
  console.log(1);
  yield "hello";
  console.log(2);
  yield "world";
  console.log(3);
  yield "!";
  return "test";
}
let g = generator();
console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
let total = "";
while ((result = g.next())) {
  total += result.value;
  console.log(result.value);
  console.log();
  if (result.done) {
    break;
  }
}
console.log(total);

function* ajax() {
  let result = yield axios.get("url");
  yield put({ type: "", payload: result.data });
}
//redux react-redux redux-saga
