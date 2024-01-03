import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
  standalone: true,
})
export class ShortenTextPipe implements PipeTransform {
  /**
   * Усекает текст до указанной максимальной длины и добавляет многоточие, если текст усекается.
   * @param text Исходный текст
   * @param maxLength Максимальная длина, до которой нужно усечь текст
   * @returns Усеченный текст
   */
  transform(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }

}
