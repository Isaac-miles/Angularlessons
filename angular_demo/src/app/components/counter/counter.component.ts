import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  incrementCounter = () => {
    this.counterValue.update(val=> val + 1);
    console.log("Incrementing...",this.counterValue());
  }
  decrementCounter = () => {
    this.counterValue.update(val=> val - 1);
    console.log("Decrementing...",this.counterValue());
  }
  resetCounter = () => {
    this.counterValue.set(0);
    console.log("Resetting...",this.counterValue());
  } 
}
