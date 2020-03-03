<?php
  $a = 10;
  $b = 'string';
  $c = array(1, 2, 3, 4, 5);
  $d = array(
  	'name' => 'Insaf',
  	'lastname' => 'Halk',
  	'new friends' => array('Andrey', 'Alexey')
  );

  echo $d['new friends'][1];
  echo '<br>';
  echo 'for example $a';
  echo "<br>";
  echo "second example $a";
  echo "<br>";
  echo 'a'.'b';


  echo "<br>";
  echo $d['name'].' '.$d['lastname'];
  echo "<br>";

	for ($i = 1; $i < 101; $i++)
	{
		echo $i;
		if (($i %2)===0)
		{
			echo ' Четная';
		} else
		{
			echo ' Нечетная';
		}
		echo "<br>";
	}
	for ($i = 1; $i <= 5; $i++)
	{
		echo '<br>';
	}


	$numbers = array(1, 2, 3, 4, 5, 6, 7, 8, 9);
	foreach( $numbers as $smth)
	{
		echo $smth*$smth. '<br>';

	}


	function getBigger($a, $b)
	{
		if $a > $b
		{
			return $a;
		}
		else{
			return $b;
		}
	}
	$bigger = getBigger(10, 30);


  //abs- return absolute value
  echo abs(-300);// 300
  // round - округление 
  echo round(35.30); // 35
  //ceil - округление в большую сторону
  echo ceil(50.11);// 51
  //floor - округление в меньшую сторону
  echo floor(50.99);//50
  //rand - сгенерировать случ число от a До b
  echo rand(0, 100) // рандом от 0 до 100
  //min - выведет самый маленький
  min(1, 0, 2, 3, 4, 10)// 0
  //max - вывдет самый большой
  max(1, 2, 0 ,1, 100)// 100
  


