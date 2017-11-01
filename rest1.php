<html>
 <?php
error_reporting(0);
$method = $_SERVER['REQUEST_METHOD'];

if($method=="GET")
{

$resId=($_GET['id']);

include_once('entity.php');
$data=getRestInfo($resId);
$myJSON = json_encode($data);
print_r($data);
}
else
{
	echo "this is the post method";
}
?>

</html>