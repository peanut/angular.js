import { Injectable } from '@angular/core';

@Injectable()
export class AddLocalStorageService {

  constructor() {}
  
 addLocalStorage( todolist) {
    localStorage.setItem('待办事项', todolist);   
  }

}
