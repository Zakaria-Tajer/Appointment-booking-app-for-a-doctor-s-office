<?php

$patientData = new userController();
    $data = $patientData->getPatientData();

    echo $data;
