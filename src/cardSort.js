function randomCard () {
  let ret = []
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      ret.push({
        num: i,
        type: j
      })
    }
  }
  let len = ret.length
  while (len) {
    let i = (Math.random() * len--) >> 0
    let temp = ret[len]
    ret[len] = ret[i]
    ret[i] = temp
  }
  return ret
}

let card = randomCard()
for (let i = 1; i < card.length; i++) {
  const key = card[i]
  let j
  for (j = i - 1; j >= 0 && card[j].num > key.num; j--) {
    card[j + 1] = card[j]
  }
  card[j + 1] = key
}
for (let i = 1; i < card.length; i++) {
  const key = card[i]
  let j
  for (j = i - 1; j >= 0 && card[j].type > key.type; j--) {
    card[j + 1] = card[j]
  }
  card[j + 1] = key
}