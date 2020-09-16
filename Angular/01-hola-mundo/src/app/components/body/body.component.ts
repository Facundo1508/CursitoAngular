import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad padreee',
        autor: 'El tio de harry potter (?'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'DrOctopus'];

}
