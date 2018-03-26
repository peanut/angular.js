<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
=======
import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
>>>>>>> 8d25882812fdfcc9fc6f6810f16659bdfe8f5086

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name:string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
 
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
