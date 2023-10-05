import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  constructor() {}

  public compute(expression: string): any {
    if (!expression) {
      return 0;
    }

    const formatedExpression = this.format(expression);

    try {
      return Function(`"use strict"; return ${formatedExpression};`)();
    } catch (error) {
      console.error(error);
      throw new Error('Expresión inválida');
    }
  }
  private format(expression: string): string {
    const sqrtSymbol = '√';
  
    const replaceMultiplication = (exp: string): string => {
      return exp.replace(/x/g, '*');
    };
  
    const replaceDivision = (exp: string): string => {
      return exp.replace(/÷/g, '/');
    };
  
    const replaceExponentiation = (exp: string): string => {
      return exp.replace(/∧/g, '**');
    };
    
    const replaceSqrtSymbol = (exp: string): string => {
      return exp.replace(new RegExp(sqrtSymbol, 'g'), 'Math.sqrt');
    };
  
    expression = replaceMultiplication(expression);
    expression = replaceDivision(expression);
    expression = replaceExponentiation(expression);

    if (expression.includes(sqrtSymbol)) {
      expression = replaceSqrtSymbol(expression);
    }

    return expression;
  }
}
