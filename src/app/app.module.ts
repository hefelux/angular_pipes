import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RutPipe } from './pipes/rut.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';

registerLocaleData(localeEs, 'es');

@NgModule({
    declarations: [
        AppComponent,
        SafeHtmlPipe,
        RutPipe,
        CapitalizeFirstPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
