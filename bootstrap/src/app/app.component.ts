import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ingenio - bootstrap';
  toggle(event) {
    const fa = event.target.className;
    if ( /square*/.test(fa)) {
      if ( /check*/.test(fa)) {
        event.target.className = 'changed fa fa-square-o';
      } else {
        event.target.className = 'fa fa-check-square-o';
      }
    } else if ( /[a-z]*-o/.test(fa) ) {
      event.target.className = fa.split('-o')[0];
    } else {
      event.target.className = fa + '-o';
    }
    event.preventDefault();
  }
  compose() {
    console.log('Compose Clicked');
  }
  back() {
    console.log('Back Clicked');
  }
}
