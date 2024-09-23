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
  