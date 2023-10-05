import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorDisplayComponent } from './components/display/display.component';
import { CalculatorButtonComponent } from './components/button/button.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorDisplayComponent,
    CalculatorButtonComponent
  ],
  imports: [
    BrowserModule, NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
