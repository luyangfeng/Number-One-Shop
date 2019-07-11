<?php
    include('conn.php');
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];

    $sql="select * from users where name='$username' and password='$password'";

    $res = $conn->query($sql);
    if( $res->num_rows > 0 ) {
    echo '{"msg":"登陆成功"}';
    }else{
        echo'{"msg":"登陆失败"}';
    }
?>