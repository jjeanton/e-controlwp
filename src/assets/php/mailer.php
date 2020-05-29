<?php
      
        require 'PHPMailer00/class.phpmailer.php'; // filepath to the PHPMailer class
        require 'PHPMailer00/class.smtp.php';

        $mail = new PHPMailer();

        $mail->SMTPDebug = 2;
        $mail->Mailer = "smtp";
        $mail->Host = "localhost";
        $mail->Port = 587;
        $mail->SMTPAuth = true; // turn on SMTP authentication
        $mail->Username = "j.jeanton@antaresmexico.com"; // SMTP username
        $mail->Password = "Je@nton2020"; // SMTP password 
        $Mail->Priority = 1;

        $mail->AddAddress("jejeantp@gmail.com","Jose");
        $mail->SetFrom("info@e-control.mx", "Info");
        $mail->AddReplyTo("info@e-control.mx", "Info");

        $mail->Subject  = "Hello";
        $mail->Body     = "This is my message.";
        $mail->WordWrap = 50;  

        if(!$mail->Send()) {
        echo 'Message was not sent.';
        echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
        echo 'Message has been sent.';
        }

    ?>