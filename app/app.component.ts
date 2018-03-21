import { Component } from '@angular/core'; 
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
}
