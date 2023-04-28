window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	}, getRandomIntInclusive(1, 5))
})
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2)
	}, getRandomIntInclusive(1, 5))
})
const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(3)
	}, getRandomIntInclusive(1, 5))
})
const p4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(4)
	}, getRandomIntInclusive(1, 5))
})
const p5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(5)
	}, getRandomIntInclusive(1, 5))
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
                      
promises.push(p1, p2, p3, p4, p5)
Promise.any(promises).then((result) => {
	document.getElementById('output').innerText = result;
})