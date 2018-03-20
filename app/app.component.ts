import { Component } from '@angular/core'; //引入模块
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //暴露
  
  // todolist
  tolist=[];
  content;
  doing=0;

  
  getCon(con){
     this.content = con;
     this.tolist.push(con);
     this.doing = this.tolist.length;
     console.log(this.tolist);
  }

  constructor(){}
  ngOnInit(){}
}
