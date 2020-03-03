<?php
	function getGetQuery(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ? $_GET[$parameter] : null;
	}
	
	$name = getGetQuery('name');
	header("Content-Type: text/plain");
	$name = preg_replace('/\s+/', ' ', $name);
	echo $name;
?>