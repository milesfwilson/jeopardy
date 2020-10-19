
export default class Score {
  constructor(score) {
    this.score = score || 0
  }

  get Template() {
    return `
  ${this.score}
  `
  }
}