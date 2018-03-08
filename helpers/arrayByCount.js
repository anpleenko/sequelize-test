const arrayByCount = count => {
  return Array.apply(null, { length: count }).map((v, i) => i + 1)
}

module.exports = arrayByCount
