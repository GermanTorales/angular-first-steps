import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: ICharacter[] = [];

  deleteCharacter(id?: string): void {
    if (!id?.length) return;

    this.onDeleteCharacter.emit(id);
  }
}
