<?php
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $number = $_POST['number'];

    //Database connection
    $conn = new mysql('localhost','root','','test');
    if($conn->connect_error){
        die('Connection Failed : '.conn->connect_error)
    }else{
        $stmt = $conn->prepare("insert into connection(name, mail, number)
            value(?,?,?)");
        $stmt->bind_param("ssi",$name, $mail, $number);
        $stmt->execute();
        echo "Registration Successfully...";
        $stmt->close();
        $conn->close();
    }
?>