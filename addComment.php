<?php
error_reporting(0);
$method = $_SERVER['REQUEST_METHOD'];

if($method=="POST")
{

$name=($_POST["name"]);
$id=($_POST["resid1"]);
$email=($_POST["email"]);
$phone=($_POST["phone"]);
$message=($_POST["message"]);

include_once('addCom.php');
$data=new addCom();
$info=$data->insert($name,$id,$email,$phone,$message);

echo $info;
}
else
{
	echo "this is the get method";
}


?>



