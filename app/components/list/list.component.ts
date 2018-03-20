import { Component, OnInit,Input } from '@angular/core';
import { AddLocalStorageService } from '../../services/add-local-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public add:AddLocalStorageService) { }

  @Input() tolist;
  @Input() doing;
  comlist=[]; 
  done=0;  

  ngOnInit() {}
   
  change(idx) {    
    this.comlist.push(this.tolist[idx]);
    this.done = this.comlist.length; 
    this.tolist.splice(idx, 1);
    this.doing = this.tolist.length;
    this.add.addLocalStorage(this.doing);    
  }

  delData(idx) {
   this.tolist.splice(idx, 1);
   this.doing = this.tolist.length;
   this.add.addLocalStorage(this.doing);  
  }
  
  change2(i) {
     this.tolist.push(this.comlist[i]);
     this.comlist.splice(i, 1);
     this.done = this.comlist.length;
     this.doing = this.tolist.length;
     this.add.addLocalStorage(this.doing);  
  }

  delData2(i) {
    this.comlist.splice(i,1);
    this.done = this.comlist.length;
  }
}
