function randomArr (n) {
  let ret = []
  for (let i = 0; i < n; i++) {
    ret.push(Math.floor(Math.random() * n))
  }
  return ret
}

// function sort (arr, lo, hi) {
//   if (lo >= hi) return
//   let mid = lo + Math.floor((hi - lo) / 2)
//   console.log('mid: ', mid)
//   sort(arr, lo, mid)
//   sort(arr, mid + 1, hi)
//   merge(arr, lo, mid, hi)
// }

// function merge (a, lo, mid, hi) {
//   let i = lo, j = mid + 1
//   for (let k = 0; k <= hi; k++) {
//     if (i > mid) {
//       a[k] = aux[j++]
//     } else if (j > hi) {
//       a[k] = aux[i++]
//     } else if (aux[j] < aux[i]) {
//       a[k] = aux[j++]
//     } else {
//       a[k] = aux[i++]
//     }
//   }
// }

// let ran = randomArr(15)
// let aux = []
// for (let i = 0; i < ran.length; i++) {
//   aux.push(ran[i])
// }
// console.log(aux)
// sort(ran, 0, ran.length - 1)
// console.log(ran)

function sort (arr) {
  let len = arr.length
  if (len < 2) return arr
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(sort(left), sort(right))
}

function merge (left, right) {
  let ret = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }
  while (left.length) {
    ret.push(left.shift())
  }
  while (right.length) {
    ret.push(right.shift())
  }
  return ret
}

let ran = randomArr(10000)
console.time('sort')
let result = sort(ran)
console.timeEnd('sort')