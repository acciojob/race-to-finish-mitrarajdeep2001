window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	}, Math.random() * 5)
})
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2)
	}, Math.random() * 5)
})
const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(3)
	}, Math.random() * 5)
})
const p4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(4)
	}, Math.random() * 5)
})
const p5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(5)
	}, Math.random() * 5)
})
      
promises.push(p1, p2, p3, p4, p5)
Promise.any(promises).then((result) => {
	document.getElementById('output').innerText = result;
})