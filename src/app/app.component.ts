import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {fader} from './router-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations:[
  //   fader
  // ],

})
export class AppComponent {
  title = 'angular';

  prepareRoute( outlet: RouterOutlet) {
    return `${outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']}`;
  }

}
