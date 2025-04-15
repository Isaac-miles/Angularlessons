import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("From Home to greeting");
  
  keyUpHandler = (event:KeyboardEvent) => {
    console.log("User entered...",event.key);
  }
}
