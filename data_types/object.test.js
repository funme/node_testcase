/**
 * [运算符优先级 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)
 * [千万不要在JS中使用连等赋值操作 - 小小沧海 - 博客园](https://www.cnblogs.com/xxcanghai/p/4998076.html)
 * [从一个简单例子来理解js引用类型指针的工作方式 - vajoy - 博客园](https://www.cnblogs.com/vajoy/p/3703859.html)
 */
test('object a.x = a = { n: 2 } ', () => {
  let a = { n: 1 };
  let b = a;
  a.x = a = { n: 2 }; // 连续赋值与执行时内存指向,赋值方向 ←
  expect(a.x).toBeUndefined();
  expect(a).toEqual({ n: 2 });
  expect(b).toEqual({ n: 1, x: { n: 2 } });
});
