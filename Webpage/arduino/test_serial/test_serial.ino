
char id_string[15];
char value_string[15];
uint8_t id_cnt = 0;
uint8_t value_cnt = 0;
char buf = '0';
bool isId = true;

void setup()
{
  Serial.begin(115200);
  pinMode(13, OUTPUT);
  Serial.println("Program started");
  digitalWrite(13, LOW);
}

void loop()
{
  if(Serial.available() > 0)
  {
    buf = (char)Serial.read();
   }
   else
	 {
    buf = '\0';   
		id_cnt = 0;
		value_cnt = 0; 	
	 }
	
	 if(buf != '\0')
	 {
		if(buf == '=')
		{
			isId = false;
		}
		else 
		{
	  if(isId)
		{
			id_string[id_cnt] = buf;
			id_cnt++;
		}
		else{
			value_string[value_cnt] = buf;
			value_cnt++;
	  }
	 }
 }    
 if(id_string == "button1_value"){
  digitalWrite(13, HIGH); 
  Serial.println("LED ON");
 }
 else if(id_string == "button1_value" && value_string =="LOW")
 {
  digitalWrite(13, LOW);
  Serial.println("LED OFF");
 }
  delay(50);
  Serial.print(id_string);
  Serial.print("            ");
  Serial.println(value_string);
}
