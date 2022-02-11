<?php include '../DBconfig.php';
header("Access-Control-Allow-Origin:*");
	$json = file_get_contents('php://input');
	 $obj = json_decode($json,true);
	 
	 $conn = new mysqli($HostName,$HostUser,$HostPass,$DatabaseName);

	$name = $obj['name'];
	$mobile = $obj['mobile'];
	$password = $obj['password'];
	$emailid=$obj['email'];
	$userRole=2;
	
	
		if($conn->connect_error){
		die("Connection failes:" .$conn->connect_error);
	}
	$result= $conn->query("SELECT * FROM user_details where emailId='$emailId'and userRole='$userRole'");
	
	
		if($result->num_rows>0){
			echo json_encode('User already Registered');  // alert msg in react native		 		
		}
		else
		{		
		   $insertuserdetails = $conn->query("insert into user_details (firstName,password,phoneNumber,emailId,userRole) values('$name','$password','$mobile','$emailId','$userRole')");
		   
		   $Userid= $conn->query("SELECT userId FROM user_details where emailId='$emailId' ");	
		   
			while($row[] = $Userid->fetch_assoc()) 
			{		
				$id =$row[0]['userId'];		
			}		   		   
		   
			if($insertuserdetails){
				echo  json_encode('Account is Registered'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			   echo json_encode(' '+$insertuserdetails+' '+$insertuserrewards);
			}
				
		}
	$conn->close();
?>

