import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

import { ICharacter } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: ICharacter[] = [
    { id: uuidV4(), name: 'Goku', power: 2500, origin: 'Sayayin' },
    { id: uuidV4(), name: 'Gohan', power: 1800, origin: 'Human' },
    { id: uuidV4(), name: 'Vegeta', power: 2300, origin: 'Sayayin' },
    { id: uuidV4(), name: 'Poccolo', power: 1500, origin: 'Namek' },
    { id: uuidV4(), name: 'Gotten', power: 1600, origin: 'Human' },
  ];

  constructor() {}

  addNewCharacter(character: ICharacter): void {
    const newCharacter: ICharacter = {
      id: uuidV4(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  removeCharacter(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
