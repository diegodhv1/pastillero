#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <LiquidCrystal.h>
#include <Time.h>
#include <TimeAlarms.h>



LiquidCrystal_I2C lcd(0x27,16,2);

  const int pinBuzzer =3;

  const int ledPIN = 9;
  const int detenerAlarma = 4;
  String tiempoString = __TIME__;
  String fechaString = __DATE__;
  
  time_t tiempo;
  
  int minutos;
  int segundos;
  int horas;
  int dia;
  int mes;
  int anio;
  
void setup() {
  setTime(tiempoString.substring(0,2)toInt(),tiempoString.substring(3,5)toInt(),tiempoString.substring(6,8)toInt());
  pinMode(pinBuzzer, OUTPUT);   // sets the pin as output
  Serial.begin(9600);  
  pinMode(ledPIN , OUTPUT);  //definir pin como salida
  pinMode(detenerAlarma, INPUT);
  lcd.init();
  lcd.backlight();
  digitalWrite(detenerAlarma, LOW);

  tiempo = now();
  
  minutos=minute(tiempo);
  segundos=second(tiempo);
  horas=hour(tiempo);
  dia=day(tiempo);
  mes=month(tiempo);
  anio=year(tiempo);
}

void loop() {
  Serial.print(__TIME__);
  Serial.print(__DATE__);
  Serial.print(detenerAlarma);
  if(digitalRead(detenerAlarma) == HIGH){
    Serial.print(" ");
    Serial.print(detenerAlarma);
    digitalWrite(pinBuzzer, LOW);
    digitalWrite(ledPIN, LOW);
    if(digitalRead(pinBuzzer) == HIGH){
      digitalWrite(pinBuzzer, LOW);
      Serial.print("   mundo");
      //contador_alarma=0;  
    }}
   segundos++;
  if(segundos>59){
    minutos++;
    segundos=0;
  }
  if(minutos>59){
    horas++;
    minutos=0;
    segundos=0;
  }
  if(horas>=24)
  {
    horas=0;
    minutos=0;
    segundos=0;
    dia++;
      
      if (((mes==1) || (mes==3)||(mes==5) ||(mes==7) || (mes==8) || (mes==10) ||(mes==12))&&(dia>31))
    {
        mes++;
        dia=1;
    
    }
      if (mes==13)
            {
              mes=1;
              anio++;
              dia=1; 
            } 
    
  
     if (((mes==4)||(mes==6) ||(mes==9) || (mes==11)&& (dia>30)))
         {
           mes++;
           dia=1; 
         }
  
    if (((mes==2) && (dia>28)))
        {
         mes++;
         dia=1; 
        }
      
    }
      if (((horas==0) && (minutos==0) && (segundos==0)))
        {
            //emite sonido
           digitalWrite(pinBuzzer, LOW); //deja de emitir
           delay(100); //espera medio segundo
           analogWrite(pinBuzzer,128);
           //delay(50);//espera medio segundo
           digitalWrite(ledPIN , HIGH);   // poner el Pin en HIGH
  //delay(1000);                   // esperar un segundo
  //digitalWrite(ledPIN , LOW);    // poner el Pin en LOW
  //delay(1000);   
        }
  lcd.clear();
  lcd.print("Hora:");
  lcd.print(" ");
  if(horas<10)lcd.print("0");
  lcd.print(horas);
  lcd.print(":");
  if(minutos<10)lcd.print("0");
  lcd.print(minutos);
  lcd.print(":");
  if(segundos<10)lcd.print("0");
  lcd.print(segundos);
  lcd.setCursor(0,1);
  lcd.print("Fecha:");
  if(dia<10)lcd.print("0");
  lcd.print(dia);
  lcd.print("/");
  if(mes<10)lcd.print("0");
  lcd.print(mes);
  lcd.print("/");
  lcd.print(anio); 
  delay (1000);
}
