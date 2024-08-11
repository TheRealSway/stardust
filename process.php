<?php
// Your email address
$to = "lukhele.official@gmail.com"; 

// Get the email from the form submission
$email = $_POST['email'];

// Email subject
$subject = "New Email Submission";

// Email body
$message = "New email received from: " . $email;

// Email headers
$headers = "From: your_email@example.com";

// Send the email
if (mail($to, $subject, $message, $headers)) {
  echo "Email sent successfully!"; 
} else {
  echo "Error sending email";
}
?>
