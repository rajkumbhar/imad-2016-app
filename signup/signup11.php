<?php
session_start();
$con=mysql_connect('localhost','root','');
$flag=mysql_select_db('resume',$con);
if(!$flag) die(mysql_error());
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

mysql_query("INSERT INTO uinfo VALUES('','$name','$email','$password')");

header('Location: http://localhost:8888/wtl/profile.html');
mysql_close($con);

?>
