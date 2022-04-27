<?php


class User extends db
{

    public function UserRegistration($email, $fullName, $birthDate,$phoneNumber, $password, $passwordConfirmation, $uniqueId)
    {

        if (strlen($password) && strlen($passwordConfirmation) < 8) {
            echo 'Password must be at least 8 characters long';
        } else if ($password !== $passwordConfirmation) {
            echo 'Passwords not matching';
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $hashedConfirmationPassword = password_hash($passwordConfirmation, PASSWORD_DEFAULT);

            $sql = "INSERT INTO `patient` 
            (email,FullName,BirthDate,phoneNumber,password,ConfirmPassword,unique_id)
            VALUES ('{$email}','{$fullName}','{$birthDate}','{$phoneNumber}','{$hashedPassword}','{$hashedConfirmationPassword}','{$uniqueId}')";

            $this->connect()->query($sql);
            
            if ($sql) {
                $sql1 = "SELECT * FROM `patient` WHERE unique_id = '{$uniqueId}'";
                $query1 = $this->connect()->query($sql1);
                $numRows = $query1->num_rows;
                if ($numRows > 0) {
                    $row = $query1->fetch_assoc();
                    $_SESSION['unique_id'] = $row['unique_id'];
                    echo 'success';
                }
            }
        }
    }

    public function UserLogin($refKey)
    {
        $sql2 = "SELECT * FROM `patient` WHERE unique_id = '{$refKey}'";
        $query = $this->connect()->query($sql2);
        $numRow = $query->num_rows;

        if($numRow > 0){
            $rows = $query->fetch_assoc();
            if($refKey === $rows['unique_id']){
                echo 'success';
            }
        }else {
            echo 'Incorrect reference key';
        }
        

    }

    public function PatientData($patientRefKey)
    {
        $sql3 = "SELECT * FROM `patient` WHERE unique_id = '{$patientRefKey}'";
        $query3 = $this->connect()->query($sql3);
        
        return $query3;
    }


    public function getRefKey($referenceKEy)
    {
        $sql5 = "SELECT * FROM `patient` WHERE unique_id = '{$referenceKEy}'";
        $query = $this->connect()->query($sql5);
         
        return $query;
    }

}
