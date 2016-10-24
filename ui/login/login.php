<?php

$con=mysqli_connect('localhost','raj','raj');
mysqli_select_db($con,'makeresume');

$id=$_REQUEST['email'];
$password=$_REQUEST['password'];

$sql="SELECT * FROM uinfo where email='$id' and password='$password' ";
$result=mysqli_query($con,$sql) or die(mysqli_error($con));

if(mysqli_num_rows($result)>0)
{
$row=mysqli_fetch_assoc($result);
$name=$row['name'];
session_start();
$_SESSION['user_status']='logged_in';
$_SESSION['user_name']=$name;


header('Location: http://localhost/wtl/profile.php');
//echo "Welcome  " . $_SESSION['user_name'] . "<br>" ;


}
else
{
echo "<h2> user not found </h2> You entered wrong credentials";

}
?>
