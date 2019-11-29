import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-of',
  templateUrl: './for-of.component.html',
  styleUrls: ['./for-of.component.scss']
})
export class ForOfComponent implements OnInit {
  // - The for-in loop is for looping over object properties
  // - The for-of loop is for looping over the values in an array
  // - The for- of is not just for arrays, it also works on most array-like objects
  constructor() { }

  ngOnInit() {
  }

  doNormalFor() {
    console.log('-----------------NEW--------------------');
    console.log('Normal for-loop on array');
    const array = [1, 2, 3];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
    console.log('----------------------------------------');
  }

  doNormalForeach() {
    // - foreach ist durch es5 möglich. Jedoch hat es 2 schlechte Sachen
    // - 1.) Man kann einen foreach-loop nicht abbrechen mit einem break;
    // - 2.) Man kann in einem foreach-loop keine Werte returnen

    console.log('-----------------NEW--------------------');
    console.log('Normal foreach-loop on array');
    const array = [1, 2, 3];
    array.forEach( value => {
      console.log(value);
    });
    console.log('----------------------------------------');
  }
  doForInObj() {
    // - forIn wird verwendet für durch Objekte zu gehen.
    // - In diesem Beispiel kann man sehen, dass man nicht den Wert, sondern das Property vom Objekt erhält
    // - Wenn man es wie den Index angibt, bekommt man dann den Wert zu jedem Property

    const person = {name: 'Robin', age: 19, email: 'rob@gmail.com', break: 'nice break', info: 'skip me!'};
    console.log('-----------------NEW--------------------');
    // tslint:disable-next-line:forin
    for (const prop in person) {
      console.log('PROPERTY: ', prop, '|| PROPERTY VALUE: ', person[prop]);
      if (prop === 'break') {
        break;
      }
    }
    console.log('----------------------------------------');
  }
  doForInArray() {
    // - Man kann mit forin-loops auch arrays loopen
    // - Ein Problem hier ist aber dass der index ein string ist.
    // - Das kann zu Probleme führen wenn man mit einem number rechnet.

    const array = [10, 20, 30, 40];
    console.log('-----------------NEW--------------------');
    // tslint:disable-next-line:forin
    for (const index in array) {
      console.log('ACHTUNG!! index = string, resultat :', 3 + index);
      console.log('PROPERTY: ', index, '|| PROPERTY VALUE: ', array[index], 'typeOf Index: ', typeof index);
    }
    console.log('----------------------------------------');
  }
  doForOfObject() {
  }

  doForOfArray() {
    const array = [10, 20, 30, 100, 120];
    console.log('-----------------NEW--------------------');
    for (const value of array) {
      console.log('value: ', value);
      if (value === 100) {
        console.log('break!');
        break;
      }
    }
    console.log('----------------------------------------');
  }
}
