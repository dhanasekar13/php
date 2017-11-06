<?php
error_reporting(0);
$method = $_SERVER['REQUEST_METHOD'];

if($method=="POST")
{

$resId=($_POST['id']);
include_once('entity.php');
$data=getRestInfo($resId);
$myJSON = json_encode($data);
echo $myJSON;

}


?>