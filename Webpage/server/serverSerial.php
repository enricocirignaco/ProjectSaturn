<?php
   
	//session_start();
	//if(!isset($_SESSION['favorites'])) { $_SESSION['favorites'] = []; }

	if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
	{
		$id = $_POST[id];
		$value = $_POST[value];
		$string .= $id ."=" .$value;
		//system("echo -ne  $string > /dev/ttyMCC");
		system("../local/sendSerial.sh $string");
	}
	// store in $_SESSION['favorites']
?>
