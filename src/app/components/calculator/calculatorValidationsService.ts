import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorValidations {
  constructor() {}

  isValid(value: string, expression: string, current: string, latest: string) {
    if (this.checkAlreadyHavePoint(value, expression)) {
      alert('Syntax Error');
      return false;
    }
    //No puede haber abierto un parentesis y cerrado al instante
    if (this.checkInconsistentParentheses(latest, value)) {
      alert('Syntax Error');
      return false;
    }
    if (
      this.isParentheses(value) &&
      this.parenthesisValidation(value, expression) &&
      expression !== ''
    ) {
      return true;
    }
    //Dentro del numero no puede tener mas parentesis de cierre que de apertura
    if (
      this.isParentheses(value) &&
      !this.parenthesisValidation(value, current)
    ) {
      alert('Syntax Error');
      return false;
    }

    return true;
  }

  isValidToSolve(expressionToCheck: string){
    if(!this.checkParenthesesBalance(expressionToCheck)){
        alert("Syntax error");
        return false;
      }
      let lastChar = expressionToCheck.charAt(expressionToCheck.length - 1);
      if(['+','-','x','÷',].includes(lastChar)){
        alert("Syntax error");
        return false;
      }

      return true;
  }

  isParentheses(value: string): boolean {
    return value === '(' || value === ')';
  }

  //Verifica si la cantidad de parentesis abiertos es igual a la de parentesis cerrados
  checkParenthesesBalance(expressionToCheck: string): boolean {
    const openCount = expressionToCheck.split('(').length - 1;
    const closeCount = expressionToCheck.split(')').length - 1;
    return openCount === closeCount;
  }

  //Verifica si la expresion ya tiene un punto, esto debido a que un numero no puede tener dos partes decimales
  checkAlreadyHavePoint(value: string, expressionToCheck: string): boolean {
    return value === '.' && expressionToCheck.includes('.');
  }

  //Verifica que haya mas parentesis de apertura que de cierre
  parenthesisValidation(value: string, expresion: string): boolean {
    if (value === '(') {
      return true;
    }

    const oppeningCount: number = expresion.split('(').length - 1;
    const closingCount: number = expresion.split(')').length - 1;

    return oppeningCount > closingCount;
  }

  //Verifica si el ultimo caracter fue un '(' y el actual es ')'
  checkInconsistentParentheses(latestChar: string, actualChar: string) {
    return latestChar === '(' && actualChar === ')';
  }
}
