import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonSettings{
    settings: { value: string; styles: string[], action: ()=> void | undefined }[];

    constructor(){
      this.settings = [
        { value: 'AC', styles: this.getAcStyle(), action: ()=>{} },
        { value: `(`, styles: this.getFunctionStyle(), action: ()=>{} },
        { value: ')', styles: this.getFunctionStyle(), action: ()=>{}},
        { value: '7', styles: this.getNumberStyle(), action: ()=>{}},
        { value: '8', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '9', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '∧', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '√(', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '4', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '5', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '6', styles: this.getNumberStyle(), action: ()=>{} },
        { value: 'x', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '÷', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '1', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '2', styles: this.getNumberStyle(), action: ()=>{}},
        { value: '3', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '+', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '-', styles: this.getFunctionStyle(), action: ()=>{} },
        { value: '0', styles: this.getNumberStyle(), action: ()=>{} },
        { value: '.', styles: this.getNumberStyle(), action: ()=>{} },
        { value: 'DEL', styles: this.getDelStyle(), action: ()=>{}},
        { value: '=', styles: this.getEqualsStyle(), action: ()=>{} }
      ];
    }

    getNumberStyle(): string[]{
        return ['border-gray-700', 'bg-gray-700', 'hover:bg-slate-600', 'active:bg-slate-500', 'active:border-slate-500'];
      }
    
      getFunctionStyle(): string[]{
        return ['border-blue-700', 'bg-blue-700', 'hover:bg-blue-600', 'active:bg-blue-500', 'active:border-blue-500'];
      }
    
      getEqualsStyle(): string[]{
        return ['border-blue-600', 'bg-blue-600', 'hover:bg-blue-500', 'active:bg-blue-400', 'active:border-blue-400'];
      }
    
      getDelStyle(): string[]{
        return ['border-red-900', 'bg-red-900', 'hover:bg-red-800', 'active:bg-red-700', 'active:border-red-700'];
      }
    
      getAcStyle(){
        return ['border-green-900', 'bg-green-900', 'hover:bg-green-800', 'active:bg-green-700', 'active:border-green-700'];
      }
}