import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { response_userList } from './interfaceList';

@Injectable()
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserInfo(id) {
    return this.http.get<response_userList>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
