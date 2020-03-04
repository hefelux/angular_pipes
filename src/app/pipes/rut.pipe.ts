import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rut'
})
export class RutPipe implements PipeTransform {

    transform(value: string, args?: string): string {

        const current = value.replace(/^0+/, '');

        if (current !== '' && current.length > 1) {

            const withoutDots = current.replace(/\./g, '');
            const onlyNumbers = withoutDots.replace(/-/g, '');
            const start = onlyNumbers.substring(0, onlyNumbers.length - 1);
            let withDots = '';
            let full = '';
            let i = 0;
            let j = 1;

            for (i = start.length - 1; i >= 0; i--) {

                const letter = start.charAt(i);
                withDots = letter + withDots;

                if (j % 3 === 0 && j <= start.length - 1) {
                    withDots = '.' + withDots;
                }

                j++;

            }
            console.log(withoutDots);

            const dv = onlyNumbers.substring(onlyNumbers.length - 1);
            full = withDots + '-' + dv;

            return full;

        }

        return value;
    }

}
