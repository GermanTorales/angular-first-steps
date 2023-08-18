import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name: string = 'ironman';
  public role: string = 'Hero';
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} | ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 10;
  }
}
