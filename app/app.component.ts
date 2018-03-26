import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public get:GetDataService) {}

  no = 200;
}
