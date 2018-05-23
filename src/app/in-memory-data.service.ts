import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron Man' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Black Panther' },
      { id: 16, name: 'StarLord' },
      { id: 17, name: 'White Wolf' },
      { id: 18, name: 'Wolverine' },
      { id: 19, name: 'Deadpool' },
      { id: 20, name: 'Thanos' }
    ];
    return {heroes};
  }
}