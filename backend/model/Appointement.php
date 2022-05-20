<?php



class Appointement extends db
{

    public function insertAppointment($endDate, $startDate, $AppointementNote, $day, $unique_Patient_id)
    {
        $sql = "INSERT INTO `appointmentreserving` (endDate,startDate,AppointementNote,days,unique_Patient_id) 
        VALUES ('{$endDate}','{$startDate}','{$AppointementNote}','{$day}','{$unique_Patient_id}')";

        $this->connect()->query($sql);
    }

    public function getAppointement($PatientUniqueId)
    {
        $sql = "SELECT * FROM `appointmentreserving` WHERE unique_Patient_id = '{$PatientUniqueId}' LIMIT 1";
        $query = $this->connect()->query($sql);

        return $query;
    }

    public function checkAppointments($startDate, $day)
    {
        $sql3 = "SELECT * FROM `appointmentreserving` WHERE startDate = '{$startDate}' AND days = '{$day}'";
        $query3 = $this->connect()->query($sql3);
    
        return $query3;
    }
}
