export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Минимальное кол-во символов 2, максимальное 10'],
      [2, 'Нельзя повысить уровень умершего'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
