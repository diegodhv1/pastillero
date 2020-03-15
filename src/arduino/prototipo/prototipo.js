var axios = require("axios");
var moment = require("moment");
var five = require("johnny-five"),
  board, lcd, button, led;
var currentTime;
var alarmaData = [];

board = new five.Board({port: "COM8"});

const initBoard = () => {
    board.on("ready", function () {

        lcd = new five.LCD({
            controller: "PCF8574T"
        });

        button = new five.Button(4);
        led = new five.Led(9);

        //buzzer
        this.pinMode(3, 1);

        button.on("release", () => {
            led.off();
            board.digitalWrite(3, 0);
        });

        currentTime = moment();

        //loop
        this.loop(1000, () => {
            getAlarms();
            currentTime.add(1,'second');
            lcd.cursor(0, 0).print("Hora:" + getTime(currentTime));
            lcd.cursor(1, 0).print("Fecha:" + getDate(currentTime));
            alarmaData.forEach(alarma => {
                setAlarm(currentTime,alarma.horaIngesta);
            });
        });
    });
}

//Alarma
function setAlarm(time,alarm) {
    if (getTime(time) == moment(alarm).format("LTS")) {
        led.on();
        board.digitalWrite(3,1);
    };
};

//Obtener alarmas de la base de datos
function getAlarms() {
    axios.get('http://localhost:3000/api/alarmas')
            .then(res => {
                alarmaData = res.data;
            })
            .catch(err => console.log(err));
};

//Reloj
moment.locale("es");

function getTime(moment) {
    return moment.format("LTS");
};

function getDate(moment) {
    return moment.format("L");
};

export {
    initBoard
};