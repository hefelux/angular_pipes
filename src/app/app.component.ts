import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    nombre = 'Capitán América';
    nombre_sin_formato = 'capitán america';
    personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
    PI: number = Math.PI;
    porcentaje = 0.234;
    salario = 300000;
    heroe: { [key: string]: string | number } = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500
    };

    frutas: { [key: number]: string } = {
        1: 'Pera',
        2: 'Manzana',
        3: 'Plátano',
        4: 'Kiwi'
    };
    valorPromesa: Promise<string>;
    fecha = new Date();

    keyvalue_template = '<p *ngFor="let fruta of frutas | keyvalue">{{ fruta.key }}. {{ fruta.value }}></p>';

    constructor() { }

    ngOnInit() {
        this.emularPromesa();
    }

    emularPromesa() {

        this.valorPromesa = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Data recibida');
            }, 3000);
        });

    }

}
