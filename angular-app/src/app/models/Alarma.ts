export class Alarma {
    dia:Date;
    horaIngesta:Date;
    sonido:string;
    volumen:number

    constructor() {
        this.dia = new Date();
        this.horaIngesta = new Date();
        this.sonido = "";
        this.volumen = 100;
    }
}