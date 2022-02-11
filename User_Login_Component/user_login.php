<?php include '../DBconfig.php';
	header("Access-Control-Allow-Origin:*");
	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	
	$conn = new mysqli($HostName,$HostUser,$HostPass,$DatabaseName);
	
	$emailId = $obj['emailId'];
	$password = $obj['password'];
	$userRole=2;	
	
	if($conn->connect_error){
		die("Connection failes:" .$conn->connect_error);
	}
	
	
	$result= $conn->query("SELECT * FROM user_details where emailId='$emailId' and password='$password' and userRole='$userRole'");
	
		if($result->num_rows==0){
			
			echo json_encode('Wrong');	
				
		}
		else{	
				while($row[] = $result->fetch_assoc()) {
					//print_r($row);
					$data =$row[0]['firstName'];
					//echo json_encode($row[0]['user_name']);
					echo json_encode($data);
					//echo json_encode('ok');
				}
				//echo json_encode('ok');				
		}
	$conn->close();
?>