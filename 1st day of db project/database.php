<?php
$con  = mysqli_connect('localhost','root','','user_info');
// get html page record
$name =$_POST['name'];
$age =$_POST['age'];
$gender =$_POST['gender'];
$phoneNumber =$_POST['phoneNumber'];

if(!$con){
    die("error detected".mysqli_error($con));
}
$sql = "insert into student(name,age,gender,phoneno) values ('$name', '$age','$gender','$phoneNumber')";
$rs = mysqli_query($con,$sql);
if($rs)
    echo "contact record inserted";
 
?>