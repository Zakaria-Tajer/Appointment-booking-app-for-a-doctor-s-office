<?php

    include 'autoload.php';


    $appointement = new AppointementNotes();

    $getAppointment = $appointement->insertAppointmentData();

    echo $getAppointment;

?>