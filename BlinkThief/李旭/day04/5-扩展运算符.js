//...扩展运算符
//值传递与引用传递/址传递 栈，堆
//值传递
let a = 1;
let b = a;
console.log(a, b);
a = 2;
console.log(a, b);
//引用传递
let obj = { name: "zhangsan" };
let obj2 = obj; //传递地址
console.log(obj == obj2);
console.log(obj === obj2);
obj.name = "lisi";
console.log(obj, obj2);
//实现obj的内容的复制，同时obj跟obj2相互不影响
let obj3 = { ...obj }; //传递赋值
console.log(obj == obj3); //比较地址
console.log(obj === obj3); //比较是否指向同一对象
obj.name = "王五";
console.log(obj, obj3);
