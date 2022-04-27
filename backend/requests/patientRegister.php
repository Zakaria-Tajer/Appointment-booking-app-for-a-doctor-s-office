<?php

    session_start();

    include 'autoload.php';

    $user = new userController();
    $register = $user->getUserRegistration();

    // var_dump($_POST);
    // echo $_POST['name'];
    // print_r($_POST);







?>