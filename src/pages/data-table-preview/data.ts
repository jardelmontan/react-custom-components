import { getRandomInt } from '../../utils/random';

export interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
  balance: number;
}

export const getPersons = (max: number) => {
  const persons: Person[] = [];

  for (let index = 1; index <= max; index++) {
    persons.push({
      id: index,
      address: 'Av. Rio Branco, 2000',
      age: getRandomInt(100),
      balance: getRandomInt(10000),
      name: `Maria ${index}`,
    });
  }

  return persons;
};
