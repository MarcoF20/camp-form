<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";


    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $sexo = $_POST['sexo'];
    $ciudad = $_POST['ciudad'];
    $otro = $_POST['otro'];
    $otro1 = $_POST['otro1'];
    $telefono = $_POST['telefono'];
    if(!isset($_POST['transporte'])){
        $transporte = "NO";
    }else{
        $transporte = $_POST['transporte'];
    }
    $comentarios = $_POST['comentarios'];
    $camisa = $_POST['camisa'];
    if(!isset($_POST['talla']) || $_POST['camisa'] == "no"){
        $talla = "n/a";
    }else{
        $talla = $_POST['talla'];
    }

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $sql = "INSERT INTO registros (nombre, apellido, edad, sexo, ciudad, otro, otro1, telefono, transporte, camisa, talla, comentarios)
    VAlUES('$nombre','$apellido','$edad','$sexo','$ciudad','$otro','$otro1','$telefono','$transporte','$camisa','$talla','$comentarios')";
    $conn->exec($sql);
    echo "Registro insertado exitosamente! :D";
    $conn = null;

?>


