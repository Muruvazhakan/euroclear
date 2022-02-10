<?php include 'DBconfig.php';
header("Access-Control-Allow-Origin:*");
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {
	die("Connection failes:" . $conn->connect_error);
}
$result = $conn->query("SELECT * FROM select_details ");

if ($result->num_rows > 0) {

	$resultarr = array();
	$finalresultarr = "[";
	while ($row[] = $result->fetch_assoc()) {
		$resultarr = $row;
		//$data =$row[0]['user_name'];		
		foreach ($resultarr as $value) {
			//print_r ($value[0]);					


		}
		$finalresultarr .= '{"attributeName":"' . $value['attributeName'] . '",' 				
			. '"value":"' . $value['value'] . '"},';	
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