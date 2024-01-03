import { Pipe, PipeTransform } from '@angular/core';
import { AutoComplete } from './models/autoComplete.interface';

@Pipe({
    name: 'TrOptionToString',
    standalone: true,
})
export class TrOptionToStringPipe implements PipeTransform {
    /**
     * Преобразует объект AutoComplete в строку, состоящую из его свойств name, region и country.
     * 
     * @param value Объект AutoComplete
     * @returns Строка, представляющая объект AutoComplete
     */
    transform(value: AutoComplete): string {
        return `${value.name}, ${value.region}, ${value.country}`
    }
}