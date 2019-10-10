import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://127.0.0.1:5000';
  dataReturn;

  // json_data;

  ngOnInit() {
    console.log('Test call api naaaa jaaaa');
  }

  call() {
    console.log('Hello world!!');

    /** Get data from API */
    this.http.get('http://127.0.0.1:5000/count').subscribe(result => {
      console.log(result);
      this.dataReturn = result;
    });

  }

  post_data(user, pass) {

    const setData = {
      username: user,
      password: pass
    };
    console.log(setData);

    /** Send data to api */
    this.http.post(this.url + '/users', setData).subscribe(resp => {
      console.log(resp);
      window.alert(resp['data'.toString()]);
    });

  }

}
