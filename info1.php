<?php
error_reporting(0);
$method = $_SERVER['REQUEST_METHOD'];

if($method=="POST")
{

$id=($_POST["entity_id"]);
$type=($_POST["entity_type"]);

include_once('entity.php');
$data=getRestaurantInfo($id,$type);

$myJSON = json_encode($data);
echo $myJSON;
}
else
{
	echo "this is the get method";
}
?>

