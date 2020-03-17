export class Alarma {
    dia:string[];
    horaIngesta:Date;
    sonido:string;
    volumen:number

    constructor() {
        this.dia = [];
        this.horaIngesta = new Date();
        this.sonido = "";
        this.volumen = 100;
    }
}