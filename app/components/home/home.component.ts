import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(public router: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.num = this.router.snapshot.params.num;
    console.log(this.id, this.num);
  }

  namelist = ["张三", "李四", "王五"];
  agree = 0;
  disagree = 0;
  id;
  num;

  vote(ag) {
    ag ? this.agree++ : this.disagree++;
  }


}
