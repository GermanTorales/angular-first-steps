import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 0;

  modifyCount(by: string): void {
    if (by === 'add') this.counter = this.counter + 1;
    else if (by === 'subtract') this.counter = this.counter - 1;
  }

  reset(): void {
    this.counter = 0;
  }
}
