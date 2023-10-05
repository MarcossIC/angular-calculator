import { Component, Input} from '@angular/core';

@Component({
  selector: 'calculator-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class CalculatorDisplayComponent {
  private _previousOperand: string;
  private _currentOperand: string;
  private _operation: any = undefined;

  constructor() {
    this._previousOperand = '';
    this._currentOperand = '';
    this.clear();
  }

  get previousOperand() {
    return this._previousOperand;
  }
  get currentOperand() {
    return this._currentOperand;
  }

  get operation() {
    return this._operation;
  }
  
  @Input() set operation(value: any) {
    this._operation = value;
  }

  @Input() set previousOperand(value: string) {
    this._previousOperand = value;
  }

  @Input() set currentOperand(value: string) {
    this._currentOperand = value;
  }


  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this._operation = undefined;
  }
}
