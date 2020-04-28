import  sys
import RPi.GPIO as GPIO
import time
import struct

#define constants
led_r_pin = 13
led_g_pin = 12
led_b_pin = 19
pwm_freq = 1000 #1kHz

#set pin board number as reference (can also use GPIO.BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
#setup pwm pins
GPIO.setup(led_r_pin, GPIO.OUT)
GPIO.setup(led_g_pin, GPIO.OUT)
GPIO.setup(led_b_pin, GPIO.OUT)
led_r = GPIO.PWM(led_r_pin, pwm_freq)
led_g = GPIO.PWM(led_g_pin, pwm_freq)
led_b = GPIO.PWM(led_b_pin, pwm_freq)
#check number of passed arguments
if len(sys.argv) > 2:
	print("too many arguments, exit script now")
	exit()
elif len(sys.argv) == 1:
	print("too less arguments, exit script now")
	exit()

#main code
#get color value
#value to expect: #rrggbb
hex_val = sys.argv[1]
r_val = int(hex_val[1:3], 16)
g_val = int(hex_val[3:5], 16)
b_val = int(hex_val[5:7], 16)
#convert range from 255 to 100
r_val = (r_val*100)/255
g_val = (g_val*100)/255
b_val = (b_val*100)/255
#change led pwm value
led_r.start(r_val)
led_g.start(g_val)
led_b.start(b_val)
time.sleep(1)
exit()
