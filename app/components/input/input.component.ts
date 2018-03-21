import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  content = '';
  @Output() getContent = new EventEmitter();
  
  keyData(e){
    if(e.keyCode == 13) {     
      console.log(this.content); 
      this.getContent.emit(this.content); 
      this.content = ''; 
    }
  }
}
