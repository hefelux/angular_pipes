import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rut'
})
export class RutPipe implements PipeTransform {

    transform(value: string, format?: string): string {

        const current = value.replace(/^0+/, '');
        let dotless = false;

        if (format !== undefined && typeof format === 'string' && format === 'dotless') {
            dotless = true;
        }

        if (typeof current === 'string' && current !== '' && current.length > 1) {

            const clearDots = current.replace(/\./g, '');
            const clearDash = clearDots.replace(/-/g, '');
            const raw = clearDash.substring(0, clearDash.length - 1);
            let body = '';
            let full = '';
            let i = 0;
            let j = 1;

            for (i = raw.length - 1; i >= 0; i--) {

                const chart = raw.charAt(i);
                body = chart + body;

                if (dotless === false && j % 3 === 0 && j <= raw.length - 1) {
                    body = '.' + body;
                }

                j++;

            }

            const dv = clearDash.substring(clearDash.length - 1);
            full = body + '-' + dv;

            return full;

        }

        return null;

    }

}
