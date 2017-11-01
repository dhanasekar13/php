<?php
error_reporting(0);
$method = $_SERVER['REQUEST_METHOD'];

if($method=="POST")
{

$city=($_POST["city"]);

include_once('entity.php');
$data=getLocationInfo($city);
$myJSON = json_encode($data);
echo $myJSON;
}
else
{
	echo "this is the get method";
}
?>