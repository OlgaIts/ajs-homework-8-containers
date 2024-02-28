import ErrorRepository from '../map';

describe('Класс ErrorRepository', () => {
  const errors = new ErrorRepository();

  test('Тестирование метода translate() с ошибкой', () => {
    expect(errors.translate(3)).toEqual('Unknown error');
  });

  test('Тестирование метода translate()', () => {
    expect(errors.translate(1)).toEqual('Минимальное кол-во символов 2, максимальное 10');
  });
});
