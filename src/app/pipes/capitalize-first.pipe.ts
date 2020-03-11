import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

    transform(value: string): string {
        if (typeof value !== 'string') {
            return null;
        }
        return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
    }

}
