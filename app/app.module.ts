import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { RouterModule } from "@angular/router";
import { GetDataService } from "./services/get-data.service";
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GoodsComponent } from './components/goods/goods.component';
import { GoodlistlinkComponent } from './components/goodlistlink/goodlistlink.component';
=======
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { AddLocalStorageService } from './services/add-local-storage.service';
>>>>>>> 8d25882812fdfcc9fc6f6810f16659bdfe8f5086

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    HomeComponent,
    NopageComponent,
    GoodsComponent,
    GoodlistlinkComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot([
      {path: "todolist", component: TodolistComponent},
      {path: "goodlistlink", component: GoodlistlinkComponent},
      {path: "voter", component: VoterComponent},
      {path: "home", component: HomeComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      // {path: "**", component: NopageComponent},
      {path: "home/:id/:num", component: HomeComponent},
      {path: "goods", component: GoodsComponent},
      {path: "goods/:goodsid", component: GoodsComponent}
    ])
  ],
  providers: [
    GetDataService
  ],
<<<<<<< HEAD
=======
  providers: [
    AddLocalStorageService    
  ],
>>>>>>> 8d25882812fdfcc9fc6f6810f16659bdfe8f5086
  bootstrap: [AppComponent]
})
export class AppModule { }
