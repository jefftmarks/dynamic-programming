function fibonacci(n, cache = {0: 0, 1: 1}) {
	if (n < 2) {
		return n;
	}

	const first = cache[n - 2] ? cache[n - 2] : fibonacci(n - 2, cache);
	const second = cache[n - 1] ? cache[n - 1] : fibonacci(n - 1, cache);

	cache[n] = first + second

	return cache;
}

// function fibonacci(num) {
// 	if (num <= 1) {
// 		return num;
// 	}

//   let first = 0;
// 	let second = 1;
// 	let current;

// 	for (let i = 1; i < num; i++) {
// 					current = first + second;
// 					first = second;
// 					second = current;
// 	}

// 	return current;
// }

if (require.main === module) {
// add your own tests in here
console.log("Expecting: 0");
console.log("=>", fibonacci(0));

console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution