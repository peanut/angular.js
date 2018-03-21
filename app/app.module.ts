import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { AddLocalStorageService } from './services/add-local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AddLocalStorageService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
