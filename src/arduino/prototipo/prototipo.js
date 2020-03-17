var axios = require('axios');
var moment = require("moment");
var five = require("johnny-five"),
  board, lcd, button, led;
var io = require('socket.io-client');
var socket = io("http://localhost:3000/api/dosificaciones", { reconnection: true, rejectUnauthorized: false });
var currentTime;
var alarmaData = [];

board = new five.Board({port: "COM8"});

//Recibir eventos del servidor   
socket.on('get alarms', () => {
    getAlarms();    
});


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

        //Request inicial
        getAlarms();

        let prueba = currentTime.format('dddd LTS');
        
        //loop
        this.loop(1000, () => {
            currentTime.add(1,'second');
            lcd.cursor(0, 0).print(getTime(currentTime));
            lcd.cursor(1, 0).print("Fecha:" + getDate(currentTime));
            alarmaData.forEach(alarma => {
                alarma.dia.forEach(diaIngesta => {
                    setAlarm(currentTime, diaIngesta, alarma.horaIngesta);
                });
            });
        });
    });
}

//Alarma
function setAlarm(time,alarmDay, alarmTime) {
    let formattedTime = moment(alarmTime).format('LTS');
    if (getTime(time) == alarmDay + " " + formattedTime) {
        led.on();
        board.digitalWrite(3,1);
    };
};

//Reloj
moment.locale("es");

function getTime(moment) {
    return moment.format("dddd LTS");
};

function getDate(moment) {
    return moment.format("L");
};

//Obtener alarmas de la base de datos
function getAlarms() {
    axios.get('http://localhost:3000/api/alarmas')
            .then(res => {
                alarmaData = res.data;
            })
            .catch(err => console.log(err));
};

initBoard();
