import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router) { }


  ngOnInit() {
    // this.goodsid = this.route.snapshot.params.goodsid;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.goodsid = params.id;
    });
  }
  goodsid;
}
