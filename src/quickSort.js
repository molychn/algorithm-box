function randomArr (n) {
  let ret = []
  for (let i = 0; i < n; i++) {
    ret.push(Math.floor(Math.random() * n))
  }
  return ret
}

function partition(D, low, high) {
  let i, j, s
  if (high > low) {
    i = low
    j = high
    s = D[low]
    while (i < j) {
      while (D[j] > s) {
        j--
      }
      D[i] = D[j]
      while (s >= D[i] && i < j) {
        i++
      }
      D[j] = D[i]
    }
    D[i] = s
    partition(D, low, i - 1)
    low = i + 1
  }
}

function quickSort (D) {
  partition(D, 0, D.length - 1)
}

let src = randomArr(30)
quickSort(src)

