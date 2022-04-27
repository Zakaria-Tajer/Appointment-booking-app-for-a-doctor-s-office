<?php


class AppointementNotes
{

    public function insertAppointmentData()
    {
        $appointement = new Appointement();

        $endTime = $_POST['endTime'];
        $startedTime = $_POST['startedTime'];
        $title = $_POST['title'];
        $day = $_POST['day'];
        $unique_Patient_id = $_POST['unique_Patient_id'];

        $getAppointement = $appointement->insertAppointment($endTime, $startedTime, $title, $day, $unique_Patient_id);

        return $getAppointement;
    }


    public function getPatientAppointment()
    {
        $appointement = new Appointement();

        $patientRFKEY = $_POST['patientRFKEY'];

        $getAllAppointment = $appointement->getAppointement($patientRFKEY);

        $numRows = $getAllAppointment->num_rows;

        if ($numRows > 0) {

            $rows = $getAllAppointment->fetch_assoc();
            
            $appointmentData = array(
                "endDate" => $rows['endDate'],
                "startDate" => $rows['startDate'],
                "AppointementNote" => $rows['AppointementNote'],
                "AppointmentDay" => $rows['days']
            );
            return json_encode($appointmentData);
        }
    }
}
