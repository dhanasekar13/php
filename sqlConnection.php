<?php

class DatabaseConnectionDAO
{

var $host; 
var  $user; 
var $password; 
var $databaseName; 
var $connection;
 function getHost()
	{
		return $host="localhost";
	}
 function getUser()
	{
		return $user="root";
	}

 function getPassword()
	{
		return $password="";
	}
 function getDatabaseName()
	{
		return $databaseName="bumpr";
	}

 function createDbConnection()
  	{
  		 $server=new DatabaseConnectionDAO();
 		 $con = mysqli_connect($server->getHost(),$server->getUser(),$server->getPassword(),$server->getDatabaseName());
   		  if($con)
			{
				$connection=$con;
			}
		else
			{
				$connection="not establisheed ";
			}
	return $connection;
	}
    
      function closeDbConnection($dbConnection)	
		{   
			mysqli_close($dbConnection);	
		}
}

?>