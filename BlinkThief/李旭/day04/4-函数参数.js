let test = ({ name, age }) => {
  console.log(name, age);
};
test({ name: "zhangsan", age: 12 });
let test1 = ([a = 10, b, c]) => {
  console.log(a, b, c);
};
test1([1, 2, 3]);

let test2 = (a = 10, b = 20) => {
  console.log(a, b);
};
test2(1);

//rest参数 ...扩展运算符 应用
let test4 = (m, ...a) => {
  //收集所有数据给到a，a是一个数组
  console.log(m, a);
};
test4(1, 2, 3, 4, 5, 6, 7);

//...扩展运算符
//值传递与引用传递/址传递 栈，堆
