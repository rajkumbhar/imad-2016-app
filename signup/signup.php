<?php
$con=mysqli_connect('localhost','raj','raj');
mysqli_select_db($con,'makeresume');
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];

$sql="SELECT * from uinfo where name='$name' ";
$result=mysqli_query($con,$sql) or die(mysqli_error ($con));

if(mysqli_num_rows($result)>0)
{
echo '<script language="javascript">';
echo 'alert("please choose some other username");';
echo 'window.location.href="profile.php";';
echo '</script>';
}

else
{
    mysqli_query($con,"INSERT INTO uinfo values (' ','$name','$email','$password')");
    header("location:http://localhost/wtl/login/login.html");
}
?>