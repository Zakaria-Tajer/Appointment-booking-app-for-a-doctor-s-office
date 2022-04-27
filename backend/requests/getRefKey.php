<?php

    include 'autoload.php';

    $patientData = new userController();
    $data = $patientData->getRefPatientKey();

    echo $data;






?>