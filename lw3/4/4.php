<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ?(string) $_GET[$parameter] : null;
	}
	$email = getGETParameter('email');
	if ($email == null)
	{
		echo "email обязателен для заполнения!";
	}
	else
	{
		$direction = "data/" . $email. '.txt';
		$email = "Email: $email";
		$first_name = "First name: ". getGETParameter('first_name');
		$last_name = "Last name: " . getGETParameter('last_name');
		$age = "Age: " . getGETParameter('age');
		$info = ($email . "<br/>" . $last_name . "<br/>" . $first_name . "<br/>" . $age);
		$way = fopen($direction, 'w+');
		fwrite($way, $info);
		fclose($way);
	}
?>