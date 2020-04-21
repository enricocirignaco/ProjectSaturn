String buf;

void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
 
  digitalWrite(2, HIGH);
  digitalWrite(3, HIGH);
  digitalWrite(4, HIGH);
  digitalWrite(5, HIGH);
  digitalWrite(6, HIGH);
  digitalWrite(7, HIGH);

  Serial.begin(115200);
  Serial.flush();
}

void loop() {
  if(Serial.available())
  {
    buf = Serial.readString();
    //Serial.flush();
    //Serial.println(buf);

    if(buf == "button_1=OFF")
    {
      digitalWrite(2, HIGH);
      digitalWrite(3, HIGH);
      digitalWrite(4, HIGH);
    }
    else if(buf == "button_1=LOW")
    {
      digitalWrite(2, LOW);
      digitalWrite(3, LOW);
      digitalWrite(4, HIGH);
    }
    else if(buf == "button_1=MID")
    {
      digitalWrite(2, LOW);
      digitalWrite(3, LOW);
      digitalWrite(4, LOW);
    }
    else if(buf == "button_1=HIGH")
    {
      digitalWrite(2, LOW);
      digitalWrite(3, HIGH);
      digitalWrite(4, LOW);
    }
    else if(buf == "red")
    {
      analogWrite(5, 0);
      analogWrite(6, 255);
      analogWrite(7, 0); 
    }
    else if(buf == "green")
    {
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(7, 255); 
    }
    else if(buf == "blue")
    {
      analogWrite(5, 255);
      analogWrite(6, 0);
      analogWrite(7, 0); 
    }
    else if(buf == "button_2=OFF")
    {
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(7, 0); 
    }
    else if(buf == "button_2=AUTO")
    {
      analogWrite(5, 164);
      analogWrite(6, 52);
      analogWrite(7, 235); 
    }
  }
}
