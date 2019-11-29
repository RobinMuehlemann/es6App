import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrls: ['./arrow-functions.component.scss']
})
export class ArrowFunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doWithoutArrowFunction() {
    console.log('without');
    const obj = {
      name: 'Robin',
      // tslint:disable-next-line:only-arrow-functions
      myFunction() {
        // - In diesem Beispiel wäre das const self = this (obj)
        const self = this;
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          // - Wenn man in dieser Funktion das this. brauchen möchte geht das nicht
          // - Das this referenziert sich nicht mehr auf das obj sondern bezieht sich selber auf die funktion
          // - Deshalb müsste erst ausserhalb auf this. refernziert werden. (Hier mit self)
          console.log(self.name);
          // - oder
          console.log(obj.name);
        });
      }
    };
    obj.myFunction();
  }

  doWithArrowFunction() {
    const obj = {
      name: 'Kavisan',
      myFunction() {
        setTimeout(_ => {
          // - Wenn man in dieser Funktion das this. brauchen möchte geht es wegen es6
          // - mit den arrow functions kann man hier auf das this bzw auf das obj zugreifen
          console.log(this.name);
        });
      }
    };
    obj.myFunction();
  }
}
