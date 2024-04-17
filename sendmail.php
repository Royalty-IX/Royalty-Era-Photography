<?php
    include 'mail.php';
    
    if (isset($_POST['sendmail'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        if (send_mail($email, $subject, $message))
        {
            echo "$name your Email was sent.";
            header("refresh:2;index.php");
        }
        else
        {
            echo "Sorry $name your Email wasn't sent.";
            header("refresh:2;index.php");
        }
    }
?>