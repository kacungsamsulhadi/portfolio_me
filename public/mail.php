<?php
// get data from form
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "";
$subject = "Mail From Website";
$txt ="Name = ". $name . "\r\nEmail = " . $email . "\r\nMessage =" . $message;
$headers = "From: noreply@site.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
// redirect
// header("Location:thankyou.html");
?>