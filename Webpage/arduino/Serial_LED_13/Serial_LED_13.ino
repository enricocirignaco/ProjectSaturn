String buf;
uint8_t i=0;

void setup() {
  Serial.begin(115200);
  Serial.flush();
  //Serial.setTimeout(100);
  pinMode(13, OUTPUT);
  //Serial.println("Program started");
  digitalWrite(13, LOW);
}

void loop() {
  if(Serial.available())
  {
    //digitalWrite(13, !digitalRead(13));
    buf= Serial.readString();
    Serial.println(buf);
  }


  if(buf == "button_4value=OFF")
  {
    digitalWrite(13, LOW);
  }
  else if(buf == "button_4value=ON")
  {
    digitalWrite(13, HIGH);
  }
     
}
