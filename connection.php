<?php
$link = mysqli_connect("localhost","owdmedia_user1","Owd2013","owdmedia_test");
if (mysqli_connect_errno($link))
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	exit();
}
?>