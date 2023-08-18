import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/main-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersFormComponent } from './components/characters-form/characters-form.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    CharactersListComponent,
    CharactersFormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DbzMainPageComponent],
})
export class DbzModule {}
