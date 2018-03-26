<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component } from '@angular/core'; 
>>>>>>> 8d25882812fdfcc9fc6f6810f16659bdfe8f5086
import { GetDataService } from './services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  constructor(public get:GetDataService) {}

  no = 200;
=======
export class AppComponent { 
  
  // todolist
  
  tolist=[];
  content; 
  doing = 0;
  
  getCon(content) {
     this.content = content;
     this.tolist.push(content);
     this.doing = this.tolist.length;
     console.log(this.tolist);
  }

  constructor() {}
  ngOnInit() {}
>>>>>>> 8d25882812fdfcc9fc6f6810f16659bdfe8f5086
}
