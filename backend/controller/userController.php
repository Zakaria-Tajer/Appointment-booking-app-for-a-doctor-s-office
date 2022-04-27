<?php


class userController {

    public function getUserRegistration(){
        function gen_uid($l=10){
            return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, $l);
        }
        $user = new User();
        $email = $_POST['email'];
        $fullName = $_POST['fullName'];
        $birthDate = $_POST['BirthDate'];
        $phoneNumber = $_POST['phoneNumber'];
        $password = $_POST['password'];
        $confirmationPass = $_POST['confirmationPass'];
        // $unique_id = $_POST['unique_id'];

        if(!empty($email) && !empty($fullName) && !empty($birthDate) && !empty($phoneNumber) && !empty($password) && !empty($confirmationPass))
        {
            $register = $user->UserRegistration($email,$fullName,$birthDate,$phoneNumber,$password,$confirmationPass,gen_uid());

            return $register;
        }else 
        {
            echo 'All fields are required';
        }
        return $user;
    }

    public function getLoginUser()
    {
        $userLogin = new User();

        $refKey = $_POST['refKey'];
        if(!empty($refKey)){

            $userLogin->UserLogin($refKey);

            // return $login;

        }else { 
            echo 'Reference key cannot be empty';
        }
    }


    public function getPatientData(){
        $patient = new User();

        $patientKey = $_POST['patientRef'];
        $data = $patient->PatientData($patientKey);

        $numRows = $data->num_rows;
        if($numRows > 0){
            $rows = $data->fetch_assoc();
            $info = array(
                $rows['email'],
                $rows['FullName'],
                $rows['BirthDate'],
                $rows['phoneNumber']
            );
            return json_encode($info);
        }
    }

    public function getRefPatientKey()
    {
        $patient = new User();
        $referenceKEY = $_POST['reference'];
        
        $Reference = $patient->getRefKey($referenceKEY);

        $numRow = $Reference->num_rows;

        if($numRow > 0){
            $rows = $Reference->fetch_assoc();
            $key = $rows['unique_id'];

            return $key;
        }
    }

}






?>