import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl, SafeScript, SafeStyle } from '@angular/platform-browser';

@Pipe({
    name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

    constructor(private _domSanitizer: DomSanitizer) { }

    transform(value: string, type: string): SafeHtml | SafeUrl | SafeResourceUrl | SafeStyle | SafeScript {

        if (typeof value !== 'string' || value === '') {
            return null;
        }

        let sanitized: SafeHtml | SafeUrl | SafeResourceUrl | SafeStyle | SafeScript;

        switch (type) {
            case 'html':
                sanitized = this._domSanitizer.bypassSecurityTrustHtml(value);
                break;
            case 'url':
                sanitized = this._domSanitizer.bypassSecurityTrustUrl(value);
                break;
            case 'resource-url':
                sanitized = this._domSanitizer.bypassSecurityTrustResourceUrl(value);
                break;
            case 'style':
                sanitized = this._domSanitizer.bypassSecurityTrustStyle(value);
                break;
            case 'script':
                sanitized = this._domSanitizer.bypassSecurityTrustScript(value);
                break;
            default:
                sanitized = null;
                break;
        }

        return sanitized;

    }

}
