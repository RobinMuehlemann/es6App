import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/userModel';

@Component({
  selector: 'app-extended-parameter-handling',
  templateUrl: './extended-parameter-handling.component.html',
  styleUrls: ['./extended-parameter-handling.component.scss']
})
export class ExtendedParameterHandlingComponent implements OnInit {
  private userList: UserModel[] = [];
  constructor() { }

  ngOnInit() {
  }

  public setDefault() {
    const robin = {
      name: 'Robin',
      email: 'robin@ssj.com',
      phoneNumber: '031 301 31 13',
      address: undefined
    };
    const kavi = {
      name: 'Kavi',
      email: undefined,
      phoneNumber: '031 001 03 00',
      address: 'rosenweg 9'
    };
    this.userList.push(kavi, robin);
    console.log('-------------Default params-------------');
    for (const user of this.userList) {
      setDefaultParams(user);
    }
    // - Wenn email oder address nicht gesetzt wurden, wird es durch den default ersetzt.
    // - Hier werden geschweifte Klammern verwendet, weil es sich um parameter in einem Object handeln.
    function setDefaultParams({name, email = 'default name', phoneNumber, address = 'default address'}) {
      console.log('Name: ', name);
      console.log('Email: ', email);
      console.log('Phone number: ', phoneNumber);
      console.log('Address: ', address);
      console.log('----------------------------------------');
    }
  }

  public setRest() {
    // - mit dem rest param können nach dem letzten bestimmten Parameter alle in einen Array geschoben werden.
    setRestParam(1, 2, 'nice', 4, 'nice2', 'test');
    function setRestParam(x, y, ...a) {
      console.log('---------------Rest Param---------------');
      console.log('x param: ', x);
      console.log('y param: ', y);
      console.log('rest params: ', a);
      console.log('----------------------------------------');
    }
  }
  public setSpread() {
    // - mit dem rest param können nach dem letzten bestimmten Parameter alle in einen Array geschoben werden.
    function setSpreadOperator(x, y, ...a) {
      return (x + y) * a.length;
    }
    console.log( setSpreadOperator(1, 2, 'nice', 4, 'nice2', 'test') === 12);
    const str = 'NICE';
    const char = [...str];
    console.log('------------Spread operator-------------');
    console.log('full string: ', str);
    char.forEach(CHAR => console.log('chars: ', CHAR));
    console.log('----------------------------------------');
  }
}

