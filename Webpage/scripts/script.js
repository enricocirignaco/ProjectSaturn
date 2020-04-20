
var initColor = "#1A1A1D";
var isFullscreen = false;

var rgb_led_desk	= "#FFFFFF";
var rgb_led_bed		= "#FFFFFF";
var active_led		= "desk";

//HTML objects
var btn_home		= document.getElementById("button_1")
var btn_desk		= document.getElementById("button_2")
var btn_bed			= document.getElementById("button_3")
var btn_bachur		= document.getElementById("button_4")
var btn_fullscreen  = document.getElementById("fullscreen");
var btn_class		= document.getElementsByClassName("button");

var s_sunrise		= document.getElementById("sunrise_onoffswitch");
var s_sunset		= document.getElementById("sunset_onoffswitch");
var s_sync			= document.getElementById("sync_onoffswitch");
var s_class			= document.getElementsByClassName("onoffswitch-checkbox");

var t_time_sunrise 		= document.getElementById("sunrise_time");
var t_duration_sunrise	= document.getElementById("sunrise_duration");
var t_time_sunset  		= document.getElementById("sunset_time");
var t_duration_sunset	= document.getElementById("sunset_duration");
var t_class				= document.getElementsByClassName("time");

var sidebar_home	= document.getElementById("sidebar_home");
var sidebar_lights	= document.getElementById("sidebar_lights");
var sidebar_music	= document.getElementById("sidebar_music");
var sidebar_weather	= document.getElementById("sidebar_weather");

var page_home		= document.getElementById("home_container");
var page_lights		= document.getElementById("lights_container");
var page_music		= document.getElementById("music_container");
var page_weather	= document.getElementById("weather_container");

var title_led_desk	= document.getElementById("led_desk_title");
var title_led_bed	= document.getElementById("led_bed_title");

var body = document.documentElement;

//Functions
// Lights Buttons
btn_home.onclick= function(){
	switch(this.innerHTML){
		case "OFF":
		this.innerHTML = "AUTO";
		this.style.borderColor = "#C3073F";
		break;
		case "AUTO":
		this.innerHTML = "LOW";
		break;
		case "LOW":
		this.innerHTML = "MID";
		break;
		case "MID":
		this.innerHTML = "HIGH";
		break;
		case "HIGH":
		this.innerHTML = "OFF";
		this.style.borderColor = "#1A1A1D";
		break;
	}
}
btn_desk.onclick = change_status_led;
btn_bed.onclick = change_status_led;
function change_status_led() {
	switch(this.innerHTML){
		case "OFF":
		this.innerHTML = "AUTO";
		this.style.borderColor = "#C3073F";
		break;
		case "AUTO":
		if(s_sunrise.checked | s_sunset.checked){
			this.innerHTML = "OFF";
			this.style.borderColor = "#1A1A1D";
		}
		else{
			this.innerHTML = "BRIGHTNESS AUTO";
			this.style.fontSize = "13px";
		}
		break;
		case "BRIGHTNESS AUTO":
		this.innerHTML = "COLOR AUTO";
		this.style.fontSize = "16px";
		break;
		case "COLOR AUTO":
		this.innerHTML = "MANUAL";
		break;
		case "MANUAL":
		this.innerHTML = "OFF";
		this.style.borderColor = "#1A1A1D";
		break;
	}
}
btn_bachur.onclick = function() {
	if(this.innerHTML == "OFF"){
		this.innerHTML = "ON";
		this.style.borderColor = "#C3073F";
	}
	else {
		this.innerHTML = "OFF";
		this.style.borderColor = "#1A1A1D";
	}
}

// Sidebar
sidebar_home.onclick 	= change_sidebar;
sidebar_lights.onclick	= change_sidebar;
sidebar_music.onclick	= change_sidebar;
sidebar_weather.onclick	= change_sidebar;
function change_sidebar() {
	sidebar_home.classList.remove('active');
	sidebar_lights.classList.remove('active');
	sidebar_music.classList.remove('active');
	sidebar_weather.classList.remove('active');
	this.classList.add('active');
	switch(this){
		case sidebar_home:
		page_home.style.visibility 		= "visible";
		page_lights.style.visibility 	= "hidden";
		page_music.style.visibility 	= "hidden";
		page_weather.style.visibility 	= "hidden";
		break;
		case sidebar_lights:
		page_home.style.visibility 		= "hidden";
		page_lights.style.visibility 	= "visible";
		page_music.style.visibility 	= "hidden";
		page_weather.style.visibility 	= "hidden";
		break;
		case sidebar_music:
		page_home.style.visibility 		= "hidden";
		page_lights.style.visibility 	= "hidden";
		page_music.style.visibility 	= "visible";
		page_weather.style.visibility 	= "hidden";
		break;
		case sidebar_weather:
		page_home.style.visibility 		= "hidden";
		page_lights.style.visibility 	= "hidden";
		page_music.style.visibility 	= "hidden";
		page_weather.style.visibility 	= "visible";
		break;
	}
}

//ssSimulator
s_sunrise.onclick = function() {
	if (!this.checked) {
		t_time_sunrise.disabled = true;
		t_duration_sunrise.disabled = true;
		t_time_sunrise.style.borderColor = "#1A1A1D";
		t_duration_sunrise.style.borderColor = "#1A1A1D";
		
	}
	else{
		t_time_sunrise.disabled = false;
		t_duration_sunrise.disabled = false;
		t_time_sunrise.style.borderColor = "#C3073F";
		t_duration_sunrise.style.borderColor = "#C3073F";
	}
}
s_sunset.onclick = function() {
	if (!this.checked) {
		t_time_sunset.disabled = true;
		t_duration_sunset.disabled = true;
		t_time_sunset.style.borderColor = "#1A1A1D";
		t_duration_sunset.style.borderColor = "#1A1A1D";

	}
	else{
		t_time_sunset.disabled = false;
		t_duration_sunset.disabled = false;
		t_time_sunset.style.borderColor = "#C3073F";
		t_duration_sunset.style.borderColor = "#C3073F";
	}
}

// colorPicker
// Build ColorpIcker
var ColorPicker = new iro.ColorPicker("#colorPicker", {
	width: 250,
	color: rgb_led_desk,
	padding: 5,
	handleRadius: 8,
	wheelLightness: false,
	sliderMargin: 20
    // more options here
});
// Read Color
ColorPicker.on('color:change', function onColorChange(color, changes){
	switch(active_led){
		case "desk":
		rgb_led_desk = color.hexString;
		break;
		case "bed":
		rgb_led_bed = color.hexString;
		break;
		case "both":
		rgb_led_desk = color.hexString;
		rgb_led_bed = color.hexString;
		break;
	}
	sendAJAX("id=colorPicker_" + active_led +"value=" + color.hexString);
});
// Set which color to change
title_led_desk.onclick = function() {
	if (!s_sync.checked) {
		active_led = "desk";
		ColorPicker.color.hexString = rgb_led_desk;
	}	
}
title_led_bed.onclick = function() {
	if (!s_sync.checked) {
		active_led = "bed";
		ColorPicker.color.hexString = rgb_led_bed;
	}
}
s_sync.onclick = function() {
	ColorPicker.color.hexString = rgb_led_desk;
	if (this.checked) {
		active_led = "both";
	}
	else{
		active_led = "desk";
	}
}

//Fullscreen button
btn_fullscreen.onclick = function(){
	if(isFullscreen){
		isFullscreen = false
		closeFullscreen();
	}
	else {
		isFullscreen = true;
		openFullscreen();
	}
}
function openFullscreen() {
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.mozRequestFullScreen) { /* Firefox */
    body.mozRequestFullScreen();
  } else if (body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    body.webkitRequestFullscreen();
  } else if (body.msRequestFullscreen) { /* IE/Edge */
    body.msRequestFullscreen();
  }
}
function closeFullscreen() {
	if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

// Send data to the server
// AJAX function
function sendAJAX(string_to_send){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'server/serverSerial.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			var fromServer = xhr.responseText;
			console.log(fromServer);
		}
	};
	xhr.send(string_to_send);
}
//send switch values
onClickSwitch(s_class);
function onClickSwitch(object_class) {
	for (i =0; i < object_class.length; i++) {
		object_class.item(i).addEventListener("click", function(){

			sendAJAX(this.id + "=" + this.checked + "\0");
		});	
	}
}
// send button values
onClickBtn(btn_class);
function onClickBtn(object_class) {
	for (i =0; i < object_class.length; i++) {
		object_class.item(i).addEventListener("click", function(){
			sendAJAX(this.id + "=" + this.textContent + "\0");
		});	
	}
}
// send time values
onChangeTime(t_class);
function onChangeTime(object_classs=t_class) {
	for (i =0; i < object_classs.length; i++) {
		object_classs.item(i).addEventListener("change", function(){
				sendAJAX(this.id + "=" + this.value + "\0");
		});
	}
}

