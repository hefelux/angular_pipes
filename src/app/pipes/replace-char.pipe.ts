import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceChar'
})
export class ReplaceCharPipe implements PipeTransform {

    transform(value: string, symbol: string, charRange?: string): string {

        const rangeRegex: RegExp = /\d+-\d+/g;
        let start = null;
        let finish = null;
        let str = '';

        if (typeof value === 'string' && value !== '' && value.length > 1) {

            if (typeof charRange === 'string' && rangeRegex.test(charRange)) {

                start = charRange.split('-')[0];
                finish = charRange.split('-')[1];

            }

            for (let i = 0; i < value.trim().length; i++) {

                let chart = symbol;

                if (start !== null && finish !== null && (i < start || i > finish)) {
                    chart = value[i];
                }

                if (value[i] === ' ') {
                    chart = ' ';
                }

                str = str + chart;

            }

            return str;
        }

        return null;

    }

}
