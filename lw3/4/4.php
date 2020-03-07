<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ?(string) $_GET[$parameter] : null;
	}
	$email = getGETParameter('email');
	$direction = "data/" . $email. '.txt';
	$email = "Email: $email";
	$first_name = "First name: ". getGETParameter('first_name');
	$last_name = "Last name: " . getGETParameter('last_name');
	$age = "Age: " . getGETParameter('age');
	$info = ($email . "\r\n". $last_name . "\r\n" . $first_name . "\r\n" . $age);
	$way = fopen($direction, 'w+');
	fwrite($way, $info);
	fclose($way);
?>