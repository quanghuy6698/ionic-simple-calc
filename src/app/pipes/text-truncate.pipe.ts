import { Pipe, PipeTransform } from '@angular/core';

/*
 * Truncate text
 *
 * @param {string} text: Text to truncate
 * @param {number} length: Length of text after truncate
 */
@Pipe({ name: 'textTruncate' })
export class TextTruncatePipe implements PipeTransform {
  transform(value: string, length: number): string {
    return value.substring(0, length);
  }
}
