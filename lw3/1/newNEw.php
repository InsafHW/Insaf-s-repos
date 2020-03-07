<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ? (string) $_GET[$parameter] : null;
	}
	$place = "data/" . $emailer . 'txt';
	$first_name = getGETParameter('first_name');
	$last_name = getGETParameter('last_name');
	$email = getGETParameter('email');
	$age = getGETParameter('age');
	$user_info = ($first_name. '<br/>' . $last_name . '<br/>' . $age . '<br/>' . $email);
	if ($email === null)
	{
		echo "Параметер email обязателен к заполнению";
	}
	$handle = fopen($place, 'w+');
	fwrite($handle, $user_info);
	fclose($handle);
?>