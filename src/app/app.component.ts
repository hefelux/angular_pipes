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
    rut = '16108387-k';
    rut_dots = '16.108.387-k';
    keyvalue_template = '<p *ngFor="let fruta of frutas | keyvalue">{{ fruta.key }}. {{ fruta.value }}></p>';
    ext_url = 'https://cdn.freebiesupply.com/logos/thumbs/2x/angular-3-logo.png';
    ext_resource_url = 'https://www.youtube.com/embed/iHTNDkkYiXE';
    // tslint:disable-next-line: max-line-length
    html_template = '<button class="btn btn-dark btn-sm" onClick="alert(`Ni los estilos ni el script que genera esta alerta funcionarían sin el pipe indicado.`)">Click me</button>';
    style = 'background-color: orange;';
    script = `https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js`;

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

    showAlert() {
        console.log('HOLA MUNDO');

    }

}
