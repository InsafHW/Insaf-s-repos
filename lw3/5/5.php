<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ?(string) $_GET[$parameter]: null;
	}
	$email = getGETParameter('email');
	$email = $email . '.txt';
	$direction = "C:/phplabs/lw3/4/data/";
	chdir($direction);// меняем каталог
	if (file_exists($email))
	{
		$handle = fopen($email, 'r');
		while (!feof($handle))
		{
			$data = fgets($handle);
			echo nl2br($data);
		}
		fclose($handle);	
	}
	else
	{
		echo 'Пользователь не найден';
	}
?>