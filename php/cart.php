<?php
include ('conn.php');

$result=$conn->query("select * from product");

$dataarr=array();
for($i=0;$i<$result->num_rows;$i++){
   $dataarr[$i] = $result->fetch_assoc();
}
echo json_encode($dataarr);