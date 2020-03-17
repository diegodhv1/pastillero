#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <LiquidCrystal.h>


LiquidCrystal_I2C lcd(0x27,16,2);

  const int pinBuzzer =3;

  const int ledPIN = 9;
  const int detenerAlarma = 4;
  
  int minutos=59;
  int segundos=55;
  int horas=23;
  int dia=10;
  int mes=03;
  int anio=2020;
  
void setup() {
  pinMode(pinBuzzer, OUTPUT);   // sets the pin as output
  Serial.begin(9600);  
  pinMode(ledPIN , OUTPUT);  //definir pin como salida
  pinMode(detenerAlarma, INPUT);
  lcd.init();
  lcd.backlight();
  digitalWrite(detenerAlarma, LOW);
}

void loop() {
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
