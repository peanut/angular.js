import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule} from '@angular/'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule，
    RouterModule.forRoot([
      {path:'todolist',component:TodolistComponent}
      {path:'todolist',component:Goodscomponent}
      {path:'todolist',component:Todolistcomponent}
    ])
  ],
  providers:[ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
