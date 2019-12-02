import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring-objects',
  templateUrl: './destructuring-objects.component.html',
  styleUrls: ['./destructuring-objects.component.scss']
})
export class DestructuringObjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // - Destructuring lets you extract values from objects and arrays.
  // - Through function parameter destructing we can provide optional parameters to functions -> we can even set a default value

  public setNormalgood() {
    const {name, country, job} = {name: 'Kavisan', country: 'Sri-Lanka', job: 'office'};

    // - Oder

    const person = {name1: 'Kavisan', country1: 'Sri-Lanka', job1: 'office'};
    const {name1, country1, job1} = person;

    // - Das Resultat bleibt gleich
    console.log('----------------------------------------');
    console.log('NAME');
    console.log('v1: ' + name + 'v2: ' + name1);
    console.log('COUNTRY');
    console.log('v1: ' + country + 'v2: ' + country1);
    console.log('JOB');
    console.log('v1: ' + job + 'v2: ' + job1);
    console.log('----------------------------------------');
  }

  public setNormalbad() {
    const person = {name: 'Robin', country: 'Japan', job: 'Developer'};

    const name = person.name;
    const country = person.country;
    const job = person.job;

    console.log('----------------------------------------');
    console.log('NAME');
    console.log(name);
    console.log('COUNTRY');
    console.log(country);
    console.log('JOB');
    console.log(job);
    console.log('----------------------------------------');
  }
  public setFunctionDestructuring() {
    const PersonRob = {
      name: 'Robin Mühlemann',
      email: 'lilrob@gmail.com',
      age: 19,
      phone: '031 111 22 33',
    };

    const PersonKavi = {
      name: 'Kavisan Nagarajah',
      email: 'kavi@nagi.ch',
      age: 19,
      phone: '031 444 55 66',
    };
    this.setFunctionDestructuring2(PersonRob);
    this.setFunctionDestructuring2(PersonKavi);
  }
  public setFunctionDestructuring2({age, email, name, phone}) {
    // - Falls keine Email gesetzt wurde, kann ein Default-Wert mitgegeben werden
    // - Die Parameter sind optional. Das heisst, dass ich in dieser Funktion auch nicht auf 'age' zugreiffen müsste

    console.log('----------------------------------------');
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Age: ', age);
    console.log('Phone: ', phone);
    console.log('----------------------------------------');
  }
}
