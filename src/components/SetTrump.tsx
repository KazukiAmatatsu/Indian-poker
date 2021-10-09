export const SetTrump = () => {
  let trump = []
  const mark = ['♠', '♥', '♦', '♣']
  for (let i = 1; i < 14; i++) {
    for (let m = 0; m < 4; m++) {
      trump.push({ mark: mark[m], number: i })
    }
  }

  for (let i = trump.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1))
    ;[trump[i], trump[random]] = [trump[random], trump[i]]
  }

  return trump
}
