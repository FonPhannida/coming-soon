<?php
$email_to = "yourname@yourdomain.com"; // Replace this with your email address
$success_message = "Thank you for contacting us. We will get in touch shortly."; // This is an example message. Replace with your own.
$site_name = "Website Name"; // Replace this with your website name.

$email = trim($_POST['email']);
$submitted = $_POST['submitted'];

if(isset($submitted)){
	if($email === '' || $email === 'Enter your email address' ) {
		$email_empty = true;
		$error = true;
	} elseif (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", $email)){
		$email_unvalid = true;
		$error = true;	
	}
}

if(isset($error)){
		echo '<span class="error_notice"><ul>';
		if($email_empty){
			echo '<li>Please enter your email address</li>';
		} elseif ($email_unvalid) {
			echo '<li>Please enter a valid email address</li>'; 
		} else {
			echo '<li>An error has occurred while sending your message. Please try again later.</li>';
		}
		echo "</ul></span>";
}

if(!isset($error)){
		$subject = 'Newsletter Submission';
		$body = "Email: $email";
		$headers = 'From: ' . $site_name . ' <' . $emailTo . '> ' . "\r\n" . 'Reply-To: ' . $email;
		mail($email_to, $subject, $body, $headers);
		
		echo '<span class="success_notice">' . $success_message . '</span>';
	}
?>