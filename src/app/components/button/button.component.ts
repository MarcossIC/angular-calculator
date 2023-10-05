import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  templateUrl: './button.component.html',
  styleUrls: []
})

export class CalculatorButtonComponent {
    @Input() text: string = "";
    @Input() styleButton: string[] = [];
}