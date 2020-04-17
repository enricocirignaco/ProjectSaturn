String string;

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

  Serial.begin(9600);
}

void loop() {
  if(Serial.available())
  {
    string = Serial.readString();
    Serial.flush();
    Serial.println(string);

    if(string == "on")
    {
      digitalWrite(2, LOW);
    }
    else if(string == "off")
    {
      digitalWrite(2, HIGH);
    }
    else if(string == "low")
    {
      digitalWrite(3, LOW);
      digitalWrite(4, HIGH);
    }
    else if(string == "mid")
    {
      digitalWrite(3, HIGH);
      digitalWrite(4, HIGH);
    }
    else if(string == "high")
    {
      digitalWrite(4, LOW);
      digitalWrite(3, HIGH);
    }
    else if(string == "red")
    {
      analogWrite(5, 0);
      analogWrite(6, 255);
      analogWrite(7, 0); 
    }
    else if(string == "green")
    {
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(7, 255); 
    }
    else if(string == "blue")
    {
      analogWrite(5, 255);
      analogWrite(6, 0);
      analogWrite(7, 0); 
    }
    else if(string == "led off")
    {
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(7, 0); 
    }
  }
}
