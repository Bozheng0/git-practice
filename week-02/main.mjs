// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.mjs';


let stack = new Stack();/*
stack.print();

stack.push(5);
stack.push(8);
stack.print();

*/



// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

stack.print(); // 應該顯示 []

// 測試 push 方法
stack.push(5);
stack.push(8);
stack.print(); // 應該顯示 [5, 8]

// 測試 pop 方法
console.log(stack.pop()); // 應該返回 8
stack.print(); // 應該顯示 [5]

// 測試 peek 方法
console.log(stack.peek()); // 應該返回 5
stack.print(); // 應該顯示 [5]

// 測試 isEmpty 方法
console.log(stack.isEmpty()); // 應該返回 false
stack.pop(); // 移除 5
console.log(stack.isEmpty()); // 應該返回 true

// 測試 size 方法
console.log(stack.size()); // 應該返回 0

// 測試 clear 方法
stack.push(10);
stack.push(20);
stack.print(); // 應該顯示 [10, 20]
stack.clear();
stack.print(); // 應該顯示 []


// 補充： 如果針對一個空的 stack pop 或 peek 會發生什麼事？
console.log(stack.pop());  // 顯示 undefined
console.log(stack.peek()); // 顯示 undefined


