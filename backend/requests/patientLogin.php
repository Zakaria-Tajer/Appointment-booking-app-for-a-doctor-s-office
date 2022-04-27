<?php

    include 'autoload.php';

    $userLogin = new userController();

    $patientRefKey = $userLogin->getLoginUser();
    
    
    


?>