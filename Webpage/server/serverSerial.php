<?php
   
	session_start();
	if(!isset($_SESSION['favorites'])) { $_SESSION['favorites'] = []; }

	function is_ajax_request() {
	  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
	    $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
	}

	if(!is_ajax_request()) { exit; }

	// extract $id
	$raw_id = isset($_POST['id']) ? $_POST['id'] : '';

	$output = system("../local/sendSerial.sh $raw_id");
	echo $raw_id;

	
	//$x = system("./sendSerial.sh button_4value=ON");

	  // store in $_SESSION['favorites']
	  // return true/false

?>
