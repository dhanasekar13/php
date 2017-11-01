<?php
class addCom
{

function insert($name,$id,$email,$phone,$message)
    { $value='';
    	include_once('sqlConnection.php');
		$create1=new DatabaseConnectionDAO();
	    $connection1 =$create1->createDbConnection(); 
     	if($connection1)
 		{

/*
 $sql="insert into bookingiternary (bookingId,entityName,entityValue,entityCount,entityCost) values (?,?,?,?,?)";
 					
				if($stmt = mysqli_prepare($connection, $sql))
				{
	 // Bind variables to the prepared statement as parameters
   					 mysqli_stmt_bind_param($stmt, "sssss", $bookingId,$arrayElementName,$entityvalue,$arrayElement,$entityCost1);   
 				  	$query11= mysqli_stmt_execute($stmt); 






 				 */
 				$sql1="INSERT INTO `review`(`resid`, `email`, `name`, `phone`, `message`) VALUES ('$id','$email','$name','$phone','$message')";
 				 $query=mysqli_query($connection1,$sql1);
				if($query)
				{
	$value="review added successfully";
				}
				else 
				{
					$value="review not added ";
	}
    	}
    	elseif ($connnection1->connect_error)
        {
     		 die("Connection failed: " . $conn->connect_error);
		} 
  	 	return $value;
    } 


}


?>