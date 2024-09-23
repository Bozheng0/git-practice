/*
stack 是一個後進先出（Last In First Out）的資料結構，通常會有 pop, push 等操作，
請用 JavaScript 的 class 來完成 Stack 資料結構，並盡可能使用 javascript 的 array 函式。
*/ 

// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // # 表示該屬性是私有的，只能在類別內部訪問
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items.toString());
  }
}


