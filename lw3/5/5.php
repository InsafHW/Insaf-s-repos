<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ?(string) $_GET[$parameter]: null;
	}
	$email = getGETParameter('email');
	$file = $email . '.txt';
	$direction = "C:/phplabs/lw3/4/data/";
	if (chdir($direction)){
		if (file_exists($file))
		{
			$handle = fopen($file, 'r');
			while (!feof($handle))
			{
				$data = fgets($handle);
				if ($data == null)
				{
					echo " ";
				}
				else{
					echo nl2br($data);
				}
			}
			fclose($handle);	
		}
		else
		{
			echo 'Пользователь не найден';
		}
	}
	else
	{
		echo 'Ошибка в смене директории';
	}
?>