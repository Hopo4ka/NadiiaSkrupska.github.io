<?php

	if (isset($_POST['to']) && isset($_POST['from']) && isset($_POST['subject']) && isset($_POST['body'])) {
		
		$to = $_POST['to'];
		$from = $_POST['from'];
		$subj = $_POST['subject'];
		$body = $_POST['body'];
	
		if (filter_var($to, FILTER_VALIDATE_EMAIL) || filter_var($from, FILTER_VALIDATE_EMAIL) ) {
			$headers = "MIME-Version: 1.0\r\n";
			$headers.= "Content-type: text/plain; charset=utf-8\r\n";
			$headers.= "Content-Transfer-Encoding: 8bit\r\n";
			$headers.= "From: ".$from."\r\n";
			$headers.= "Return-Path: Generation Pictures <box@generation.pictures>\r\n";
			$headers.= "Reply-To: Generation Pictures <box@generation.pictures>\r\n";
			$headers.= "X-Sender: Generation Pictures <box@generation.pictures>\r\n";
			$headers.= "X-Mailer: Generation Pictures Mailer v1.07\r\n";
			$headers.= "X-Priority: 3\r\n";
			$headers.= "X-MSMail-Priority: 3\r\n";
			
			if (mail($to,$subj,$body,$headers))
				echo json_encode(array('message' => 'success'));
		}
		else
			echo json_encode(array('error' => 'Emails are not valid!'));
		
	}
	else
		echo json_encode(array('error' => 'Provide full data'));
	
	
?>