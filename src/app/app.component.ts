import { Component } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'es6App';
  private hideButton = false;

  constructor(private route: Router) {
    this.route.events.subscribe(() => {
      if (this.route.url === '/') {
        this.hideButton = true;
      } else {
        this.hideButton = false;
      }
    });
  }
}
