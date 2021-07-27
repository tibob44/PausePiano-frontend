import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  appareil = "test";

  tableau = [
    {
      title : 'Bonjour',
      content : 'Hello World'
    },
    {
      title : 'Bonsoir',
      content : 'Goodbye World' 
    }
  ];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
