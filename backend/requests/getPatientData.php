<?php

    include 'autoload.php';

    $patientData = new userController();
    $data = $patientData->getPatientData();


    echo $data;




?>