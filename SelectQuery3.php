<?php include './DBconfig.php';
	 header("Access-Control-Allow-Origin:*");
	$json = file_get_contents('php://input');
	 $obj = json_decode($json,true);
	 
	 $conn = new mysqli($HostName,$HostUser,$HostPass,$DatabaseName);	
	 
	 $Gender = $obj['Gender'];
	 $age = $obj['age'];

	 if($conn->connect_error){
		die("Connection failes:" .$conn->connect_error);
	}
	
	 if($Gender ==  "Male")
	{
		$Gender='M';		
	}
	else
	{
		$Gender='F';	
	}
	
	if($age ==  "<17")
	{
		$ages[0]=0;
		$ages[1]=17;
	}
	elseif ($age ==  ">65") {
		$ages[0]=65;
		$ages[1]=200;
	}
	else{
		$ages = explode("-", $age);
	}
	if($conn->connect_error){
		die("Connection failes:" .$conn->connect_error);
	}

	$result= $conn->query("select age, Be_count, Eq_Count from STATS_Accounts_by_gender_age where Gender = '$Gender' and age between '$ages[0]' and $ages[1]  ");	
	
if ($result->num_rows > 0) {

	$resultarr = array();
	$finalresultarr = "[";
	while ($row[] = $result->fetch_assoc()) {
		$resultarr = $row;				
		foreach ($resultarr as $value) {
		}
		$finalresultarr .= '{"age":"' . $value['age'] . '",' 	
		. '"Booke-entry accounts":"' . $value['Be_count'] . '",' 			
		. '"Equity savings accounts":"' . $value['Eq_Count'] . '"},';	
	}
	$finalresultarr = substr($finalresultarr, 0, -1);
	$finalresultarr .= "]";
	echo json_encode($finalresultarr);
} else {
	if ($result->num_rows == 0) {
		echo  json_encode('No'); // 
	} else {
		echo json_encode('check internet connection');
	}
}
	$conn->close();
?>

