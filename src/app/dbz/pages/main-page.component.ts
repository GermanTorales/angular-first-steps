import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { ICharacter } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): ICharacter[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.removeCharacter(id);
  }

  onCreateCharacter(character: ICharacter): void {
    this.dbzService.addNewCharacter(character);
  }
}
