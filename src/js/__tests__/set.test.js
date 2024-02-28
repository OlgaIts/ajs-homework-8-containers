import Team from '../set';

describe('Класс Team', () => {
  const team = new Team();
  const character = {
    name: 'Мерлин',
    type: 'Magician',
    health: 100,
  };

  const character2 = {
    name: 'Финист',
    type: 'Swordsman',
    health: 100,
  };

  test('Тестирование метода add()', () => {
    team.add(character);
    expect(team.toArray()).toContain(character);
  });

  test('Тестирование метода add() с ошибкой', () => {
    team.add(character2);
    expect(() => team.add(character2)).toThrowError('Объект уже существует');
  });

  test('Тестирование метода addAll()', () => {
    team.addAll(character, character2);
    expect(team.toArray()).toEqual([character, character2]);
  });
});
