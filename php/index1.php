<?php

include ('conn.php');

$mysql = "select * from product";

$result = $conn->query($mysql);

$dataarr = array();
for($i = 0;$i<$result->num_rows;$i++){
    $dataarr[$i] = $result->fetch_assoc();
}
echo json_encode($dataarr);