// 請以 JavaScript 的 array 函式完成 sum 函式，也就是程式碼中不可以出現 for, while 等迴圈程式。
// ary: number array
function sum(ary) {
	var result = ary.reduce(function(acc, current) {
		return acc + current;
	}, 0)
	return result;
}

console.log(sum([1, 5, 3, 2])); // 11



//(optional) 挑戰題: 有幾種寫法？
// 利用 for 迴圈
function sum1(ary) {
	var result = 0;
	for (let i = 0; i < ary.length; i++) {
		result += ary[i];
	}
	return result;
}

console.log(sum1([1, 5, 3, 2])); // 11


// 利用 while 迴圈
function sum2(ary) {
	var i = 0;
	var result = 0;
	while (i < ary.length) {
		result += ary[i];
		i++;
	}
	return result;
}

console.log(sum2([1, 5, 3, 2])); // 11


// 利用遞迴
function sum3(ary) {
    // 終止條件：如果陣列只有一個元素，直接返回該元素
    if (ary.length === 1) {
        return ary[0];
    } else {
        // 分別對陣列的前半部分與後半部分進行分割並加總
        return sum3(ary.slice(0, Math.floor(ary.length / 2))) + 
               sum3(ary.slice(Math.floor(ary.length / 2), ary.length));
    }
}

console.log(sum3([1, 5, 3, 2])); // 11



//(optional) 挑戰題: 如果 `sum` 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
// 利用遞迴
function sum4(n) {
	if (n <= 1) {
		return n;
	} else {
		return n + sum4(n-1);
	}
}

console.log(sum4(100)); // 5050


//利用公式解
function sum5(n) {
	return ((n + 1) * n) / 2;
}

console.log(sum5(100)); // 5050