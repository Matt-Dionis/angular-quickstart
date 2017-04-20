import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Our first Angular {{1 + 1}} component!</h1>`,
})
export class AppComponent  { name = 'Angular'; }
