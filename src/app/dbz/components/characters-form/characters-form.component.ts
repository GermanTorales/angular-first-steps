import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-form',
  templateUrl: './characters-form.component.html',
})
export class CharactersFormComponent {
  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    name: '',
    power: 0,
    origin: '',
  };

  saveCharacter(): void {
    if (!this.character.name.length) return;

    this.onNewCharacter.emit(JSON.parse(JSON.stringify(this.character)));

    this.character.name = '';
    this.character.power = 0;
    this.character.origin = '';
  }
}
