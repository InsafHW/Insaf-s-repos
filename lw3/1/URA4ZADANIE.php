<?php
	function getGETParameter(string $parameter): ?string
	{
		return isset($_GET[$parameter]) ? $_GET[$parameter] : null;
	}
	
?>