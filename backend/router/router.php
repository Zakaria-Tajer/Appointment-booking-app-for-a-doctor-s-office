<?php
    header('Access-Control-Allow-Origin: *');

    require 'vendor/autoload.php';

    $router = new AltoRouter();

    
    $router->map('GET', '/', function (){
        echo 'home';
    });
    $router->map('GET','/patients', 'requests/patientRegister');

    $router->map('POST','/register', 'requests/patientRegister');
    $router->map('POST','/login', 'requests/patientLogin');
    $router->map('POST','/patient', 'requests/getPatientData');
    $router->map('POST','/ReferenceKey', 'requests/getRefKey');
    $router->map('POST','/Appointment', 'requests/AppointmentData');
    $router->map('POST','/getALLAppointment', 'requests/getALLAppointment');
    $router->map('POST','/getReservedAppointments', 'requests/reservedAppointements');
    



    $match = $router->match();
    if($match !== null){
        if(is_callable($match['target'])){
            call_user_func_array($match['target'], $match['params']);
        }else {
            $prams = $match['params'];
            include "{$match['target']}.php";
        }
    }

?>