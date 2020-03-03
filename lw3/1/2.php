<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ? $_GET[$parameter] : null;
	}
	header("Content-Type: text/plain");
	
	$first_name = getGETParameter("first_name");
	$first_name = trim($first_name);
	$last_name = getGETParameter("last_name");
	$last_name = trim($last_name);
	
	//echo $first_name;
	
	$age = getGETParameter("age");

	$second_name = getGETParameter("second_name");
	if (strcmp($first_name, $last_name) !== 0)
	{
		echo 'Имя <> Фамилия';
	}
	
	echo $first_name;
	
	echo $age;


	
?>