import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-literals',
  templateUrl: './template-literals.component.html',
  styleUrls: ['./template-literals.component.scss']
})
export class TemplateLiteralsComponent implements OnInit {
  private fullName: string;
  private fullName2: string;

  constructor() { }

  ngOnInit() {
  }

  private doStringInterpolation() {
    const fName = 'Robin';
    const lName = 'Mühlemann';
    this.fullName = fName + ' ' + lName;
    console.log('Normal: ', this.fullName);

    const fName2 = 'Kavisan';
    const lName2 = 'Nagarajah';
    this.fullName2 = `${fName2} ${lName2}`;
    console.log('Template literals: ', this.fullName2);
  }

  private doMultilineLiterals() {
    const is = 'is';
    const painMultiline = 'My\n' +
    'name \n' +
    'is \n' +
    'Robin';
    // - Sieht nicht wirklich schön aus.
    // - Wenn man es mit tabs schön anzeigt, verschiebt es auch z.B. auf der Konsole
    const easyMultiline = `
My
name
${is}
Kavisan`;
    console.log('----------------------------------------');
    console.log(painMultiline);
    console.log('----------------------------------------');
    console.log(easyMultiline);
    console.log('----------------------------------------');

  }
}
