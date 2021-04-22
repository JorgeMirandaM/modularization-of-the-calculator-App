import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado=0;
  a=0;
  b=0;
  sumar(){
    this.resultado= this.a + this.b;
  }
}
