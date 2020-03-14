var moment = require("moment");
var five = require("johnny-five"),
  board, lcd, button, led, buzzer;
var currentTime;
var currentDate;
var alarmState = false;

board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    controller: "PCF8574T"
  });

  button = new five.Button(4);
  led = new five.Led(9);
  buzzer = new five.Piezo(3);

  //loop
  this.loop(1000, function() {
    currentTime = getTime();
    currentDate = getDate();
    lcd.cursor(0,0).print("Hora:" + currentTime);
    lcd.cursor(1,0).print("Fecha:" + currentDate);
    startAlarm();
    stopAlarm();
  });

});

//Alarma
function startAlarm() {
    if (currentTime == '19:25:30') {
        led.on();
        buzzer.frequency(900,10000);
        alarmState = true;
    };
};

function stopAlarm() {
    if(alarmState){
        button.on("press", function() {
            buzzer.off();
            led.off();
            alarmState = false;
        });
    }
};

//Reloj

moment.locale("es");

function getTime() {
    return moment().format("LTS");
};

function getDate() {
    return moment().format("L");
};

