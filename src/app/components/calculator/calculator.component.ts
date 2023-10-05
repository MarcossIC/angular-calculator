import { Component } from '@angular/core';
import { Calculator } from './calculatorService';
import { ButtonSettings } from './buttonSettingService';
import { CalculatorValidations } from './calculatorValidationsService';


@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: []
})

export class CalculatorComponent {
  //
  expresion: string = "";
  currentNumber: string = "";
  latestChar: string = "";
  buttonsSetting: ButtonSettings;
  calculator: Calculator;
  validations: CalculatorValidations;

  constructor(){
    this.buttonsSetting = new ButtonSettings();
    this.calculator = new Calculator();
    this.validations = new CalculatorValidations();
    
    this.buttonsSetting.settings.forEach(setting=>{
      if(setting.value === 'AC') setting.action = ()=> this.deleteAll();
      if(setting.value === 'DEL') setting.action = ()=> this.deleteLatest();

      if(['1','2','3','4','5','6','7','8','9','0','.','(',')','√('].includes(setting.value)) {
        setting.action = ()=> this.printChar(setting.value);
      }
      if(['+','-','x','÷','∧'].includes(setting.value)) {
        setting.action = ()=> this.printOperator(setting.value);
      }
      if(setting.value === '=') {
        setting.action = ()=> this.solveExpression();
      }
    });
  }

  printChar(value: string){
    if(this.validations.isValid(value, this.expresion, this.currentNumber, this.latestChar)){
      this.updateBotDisplay(value);
    }
  }

  printOperator(operation: string){
    if(this.currentNumber === ''){
      alert("void");
      return; 
    }
    if(this.currentNumber === '√('){ 
      alert("Syntax error");
      return; 
    }
    this.updateTopDisplay( operation );
    this.currentNumber = '';
  }

  deleteAll(){
    this.expresion = '';
    this.currentNumber = '';
  }

  deleteLatest(){
    this.currentNumber = this.currentNumber.slice(0, -1);
  }

  solveExpression(){
    if(this.validations.isValidToSolve(this.expresion+this.currentNumber)){

      this.updateTopDisplay('');
      const result = this.calculator.compute(this.expresion);

      this.updateAllDisplay('',result.toString());
    }
  }

  updateAllDisplay(top: string, bot: string){
    this.expresion = top;
    this.currentNumber = bot;
    this.latestChar = '';
  }

  updateBotDisplay(value: string){
    this.currentNumber += value;
    this.latestChar = value;
  }

  updateTopDisplay(value: string){
    this.expresion += this.currentNumber + ' '+ value;
  }

}
