import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-type';

  strSomthing: string;
  numSomthing: number;
  check: boolean;
  something: any;
  strSomthing1 = '';

  /** list variable */
  listAny: any[];
  listStr: string[];
  listNum: number[];
  listTest = [];

  /** dict variable */
  dictSomthing = {};

  listUser = [
    {
      name: 'test1',
      pass: 1234
    },
    {
      name: 'test2',
      pass: 5678
    },
    {
      name: 'test3',
      pass: 9087
    },
    {
      name: 'test4',
      pass: 6543
    },
    {
      name: 'test5',
      pass: 2109
    },
    {
      name: 'test6',
      pass: 8765
    }
  ];


  ngOnInit() {
    // this.dictSomthing.q = '111111';
    this.dictSomthing = {
      q: 1,
      test: 'comp'
    };
    // console.log(this.dictSomthing);
    const data = this.dictSomthing['test'.toString()];
    // console.log(data);


    // for (const iterator of this.listUser) {
    //   const obj = iterator;
    //   // console.log(obj);
    // }

    // for (const key in this.listUser) {
    //   if (this.listUser.hasOwnProperty(key)) {
    //     const element = this.listUser[key];
    //     // console.log(element);
    //   }
    // }

    // for (let index = 0; index < this.listUser.length; index++) {
    //   const element = this.listUser[index];
    //   console.log(element);
    // }


    // for (const index in this.listUser) {
    //   console.log(index);
    //   console.log(this.listUser[index]);
    // }


    enum grade { A, B, C, D, F, I, U, W }
    // console.log(typeof (grade));

    // let student1 = Grade.A
    const student1 = grade[0];
    const student2 = grade.A;
    // console.log('>>>>>>', typeof (student1), student1);
    // console.log('>>>>>>', typeof (student2), student2);

    // for (const iterator of grade) {
    //   console.log(iterator);
    // }

    // for (let index = 0; index < grade.length; index++) {
    //   const element = grade[index];
    //   console.log(element);
    // }

    for (const key in grade) {
      if (grade.hasOwnProperty(key)) {
        const element = grade[key];
        // console.log(element);
      }
    }


    // console.log('Start class!');
    // this.strSomthing1 = 't';
    // console.log(this.strSomthing, typeof (this.strSomthing));

    /** error type */
    // this.strSomthing = 1;

    // this.check = true;
    // console.log(this.check, typeof (this.check));

    // this.something = true;
    // this.something = 1;
    // this.something = 'test';

    // this.listAny = ['test', 1, false];
    // console.log(this.listAny, typeof (this.listAny));

    // this.listNum = [1, 2, 3];
    // console.log(this.listNum, typeof (this.listNum));

    // this.listTest = [1, 'a', true];

    /** list error */
    // this.listNum = [1, 2, 'a'];

  }


}
