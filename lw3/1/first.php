<?php
	function getQueryStringParameter(string $name): ?string
	{
		return isset($_GET[$name]) ? $_GET[$name]: null;
	}
	$value = getQueryStringParameter('text');
	function RemoveExtraBlanks($text)
	{
		for ($i = 1; $i <= lenstr('$text'))
		{
			if $i != ' '
			{
				echo $i;
			}
		}
	}

?>