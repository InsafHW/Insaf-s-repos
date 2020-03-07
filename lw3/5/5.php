<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ?(string) $_GET[$parameter]: null;
	}
	$email = getGETParameter('email');
	$email = $email . '.txt';
	$direction = "C:/phplabs/lw3/4/data/";
	chdir($direction);
	if (file_exists($email))
	{
		$handle = fopen($email, 'r');
		$data = file_get_contents($email);
		fclose($handle);
		echo $data;
	}
	else
	{
		echo 'Пользователь не найден';
	}
?>