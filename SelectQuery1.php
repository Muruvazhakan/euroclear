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
	
	$result= $conn->query("select ISIN, HoldingsBE, HoldingsEQ from	STATS_Ownership where Gender = '$Gender' and Age between '$ages[0]' and $ages[1]  Group by ISIN");
	
	
if ($result->num_rows > 0) {

	$resultarr = array();
	$finalresultarr = "[";
	while ($row[] = $result->fetch_assoc()) {
		$resultarr = $row;
		//$data =$row[0]['user_name'];		
		foreach ($resultarr as $value) {
			//print_r ($value[0]);					


		}
		$finalresultarr .= '{"Issuing Company":"' . $value['ISIN'] . '",' 				
		. '"Sum(Book-entry Holdings)":"' . $value['HoldingsBE'] . '",' 				
		. '"Sum(Eq-savings Holdings)":"' . $value['HoldingsEQ'] . '"},';	
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

