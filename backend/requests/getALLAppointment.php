<?php


    include 'autoload.php';

    $getAppointment = new AppointementNotes();

    $data = $getAppointment->getPatientAppointment();


    echo($data);











?>