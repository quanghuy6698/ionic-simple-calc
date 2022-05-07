import { Pipe, PipeTransform } from '@angular/core';

/*
 * Operator friendly
 *
 * @param {string} operator: Operator to transform
 */
@Pipe({ name: 'operatorFriendly' })
export class OperatorFriendlyPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case '+':
        return value;
      case '-':
        return value;
      case '*':
        return 'x';
      case '/':
        return '÷';
      default:
        return value;
    }
  }
}
