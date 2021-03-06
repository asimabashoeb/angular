import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-emit-event';
  
  valueEmittedFromChildComponent: string = '';
  
  parentEventHandlerFunction(valueEmitted){
    this.valueEmittedFromChildComponent = valueEmitted;
  }
}
