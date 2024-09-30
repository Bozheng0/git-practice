// 請在 Node.js 中實作一個函式 fibonacci(n)，該函式返回第 n 個費波納契數。


function fib(n) {
    // TODO: implement fibonacci

    if (n <= 1) {
        return n
    }else{
        let fa = 0, fb = 1, fc;
        for (let i = 2; i <= n; i++) {
            fc = fa + fb;
            fa = fb;
            fb = fc;
        }
        return fc;
    }

  }
  
  console.log(fib(0)); // 0
  console.log(fib(1)); // 1
  console.log(fib(5)); // 5
  console.log(fib(10)); // 55




  // 補充：精簡版
  function fib2(n) {
    if (n <= 1) return n;

    let [fa, fb] = [0, 1]; // 使用陣列解構賦值
    for (let i = 2; i <= n; i++) {
        [fa, fb] = [fb, fa + fb]; // 同時更新 fa 和 fb
    }
    return fb; // 返回最後計算的 Fib 數
}

console.log(fib2(0)); // 0
console.log(fib2(1)); // 1
console.log(fib2(5)); // 5
console.log(fib2(10)); // 55
  

// 補充(其它方法)：使用遞迴
function fib3(n) {
    if (n <= 1) return n; // 終止條件
    return fib3(n - 1) + fib3(n - 2); // 基本條件
}


console.log(fib3(0)); // 0
console.log(fib3(1)); // 1
console.log(fib3(5)); // 5
console.log(fib3(10)); // 55