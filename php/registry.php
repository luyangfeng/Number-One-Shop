<?php

include('conn.php');

$name = $_REQUEST['username'];
$phone = $_REQUEST['phone'];
$pass = $_REQUEST['password'];
// print_r ($name);
$mysql = "select * from users where name='$name'";

$result = $conn->query($mysql);

if( $result->num_rows > 0 ) {
   die('{"msg":"用户名已存在"}');
}else{
    $insMyspl = "insert users values(null,'$name','$phone','$pass',NOW())";

    $res = $conn->query($insMyspl);
    
    if($res){
        // echo'<script>alert("注册成功");location.href="login.html";</script>';
        echo '{"msg":"注册成功"}';
    }
    
}


$conn->close();
