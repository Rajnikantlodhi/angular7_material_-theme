import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ApplicationComponent implements OnInit {
    dateClass = (d: Date) => {
      const date = d.getDate();
  
      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20 || date === 26 || date === 17 || date === 5 || date === 12 || date === 7) ? 'example-custom-date-class' : undefined;
    }
  constructor() { }

  ngOnInit() {
  }

}
