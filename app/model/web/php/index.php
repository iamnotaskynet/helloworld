<?php 
 	//constants
	const PHP_VERSION_IS = '7.1';
	//HTML tags
	const TAG_BR = '<br>';
	const TAG_P_OPEN = '<p>';
	const TAG_P_CLOSE = '</p>';
	const TAG_H1_OPEN = '<h1>';
	const TAG_H1_CLOSE = '</h1>';
	const TAG_H2_OPEN = '<h2>';
	const TAG_H2_CLOSE = '</h2>';
	//HTML table tags
	const TAG_TABLE_OPEN = 
		'<table style="border: 8px solid black; border-collapse: collapse;">';
	const TAG_TABLE_CLOSE = '</table>';
	const TAG_TR_OPEN = '<tr style="">';
	const TAG_TR_CLOSE = '</tr>';
	const TAG_TH_OPEN = 
		'<th style="border: 6px solid grey; text-align: left; padding: 5px;">';
	const TAG_TH_CLOSE = '</th>';
	const TAG_TD_OPEN = 
		'<td style="border: 6px solid lightgrey; text-align: left; padding: 5px;">';
	const TAG_TD_CLOSE = '</td>';
	//TEXT
	const TEXT_SPACE = ' ';
	const TEXT_TAB = '&nbsp;&nbsp;&nbsp;';

 	//echo TAG_H1_OPEN, 'Hello World', TAG_H1_CLOSE;

 	printf(TAG_H1_OPEN . " php version is = " . PHP_VERSION_IS . TAG_H1_CLOSE);
 	//----------------------------------------------------------------------------------
 	printf(TAG_H2_OPEN . "primitive types" . TAG_H2_CLOSE);

	$booleanVar = !false;
	$stringcVar = "This is a string.";
	$integerVar = 42;
	$floatinVar = 3.14;
	$arrayisVar = [1,2,3];
	$nullVariab = null;
	//$objectVari = new stdClass(); //new stdClass();
	echo 'booleanVar',TEXT_TAB, $booleanVar, TEXT_TAB, gettype($booleanVar), TAG_BR;
	echo 'integerVar',TEXT_TAB, $integerVar, TEXT_TAB, gettype($integerVar), TAG_BR;
	echo 'floatinVar',TEXT_TAB, $floatinVar, TEXT_TAB, gettype($floatinVar), TAG_BR;
	echo 'stringcVar',TEXT_TAB, $stringcVar, TEXT_TAB, gettype($stringcVar), TAG_BR;
	echo 'arrayisVar',TEXT_TAB, $arrayisVar, TEXT_TAB, gettype($arrayisVar), TAG_BR;
	//echo 'objectVari',TEXT_TAB, $objectVari, TEXT_TAB, gettype($objectVari), TAG_BR;
	// resource
	echo 'nullVariab', TEXT_TAB, $nullVariab, TEXT_TAB, gettype($nullVariab), TAG_BR;
	// unknown type
	//-----------------------------------------------------------------------------------
	printf(TAG_H2_OPEN . "Conditions" . TAG_H2_CLOSE);
	//conditions
	if ($integerVar > 25) echo "In if condition becous it is true.",TEXT_SPACE, TAG_BR;
	if (false) ;
	elseif ($integerVar == 42) 
		echo "In elseif condition becous it is hardcoded to true.",TEXT_SPACE, TAG_BR;
	echo TAG_BR;
	echo "Switch condition";
	echo TAG_BR;
	switch (1) {
		case 0:
			echo "In switch case 0 condition";
			break;
		case 1:
			echo "In switch case 1 condition";
			break;
		default:
			echo "In switch default condition";
			break;
	}
	echo TAG_BR;
	//------------------------------------------------------------------------------------
	printf(TAG_H2_OPEN . "Loops" . TAG_H2_CLOSE);
	// for loop
	echo "for: preincrement: " ;
	for ($i=0; $i < 10; ++$i) print($i);
	echo "; for: postincrement: " ;
	for ($i=0; $i < 10; $i++) print($i);
	echo TAG_BR;
	// while loop
	echo "while: preincrement: " ;
	$iterat = 0;
	while ( $iterat < 10) echo ++$iterat;
	echo "; while: postincrement: " ;
	$iterat = 0;
	while ( $iterat < 10) echo $iterat++; 
	echo TAG_BR;
	// do while loop
	echo "dowhile: preincrement: " ;
	$iterat = 0;
	do echo ++$iterat; 
	while ( $iterat < 10);
	echo "; dowhile: postincrement: " ;
	$iterat = 0;
	do echo $iterat++; 
	while ( $iterat < 10);
	echo TAG_BR;
	//arrays
	print(TAG_H2_OPEN . 'Arrays, foreach, print_r: ' . TAG_H2_CLOSE .TAG_BR);
	$hello = ['hello', ' ','world']; // $hello = array('hello', ' ','world');
	print('Words from array: '.$hello[0].$hello[1].$hello[2]);
	echo TAG_BR;

	print('Foreach loop in array: ');
	$hello1 = ['h','e','l','l','o',' ','w','o','r','l','d'];
	foreach ($hello1 as $char) print($char . TEXT_SPACE);
	print(TAG_BR);

	$arrayNdimension = [
		0 => [
			'string' => 'hello',
			'number' => $integerVar
		],

		1 => [
			'string' => 'madness',
			'number' => $floatinVar
		],

		2 => [
			'string' => 'world',
			'number' => 1.4
		]
	];
	
	print(TAG_BR .'Array with print_r :' . 
		TAG_BR . TEXT_TAB . 
		print_r($arrayNdimension) . TAG_BR );

	print('Foreach loop in n dimension array and print_r: ' . 
		TAG_BR . TEXT_TAB);

	foreach ($arrayNdimension as $subarray) {
		print_r($subarray . TAG_BR);
	}
	print(TAG_BR . 
		'Foreach loop in n dimension array with keys and values: ' . 
		TAG_BR . TEXT_TAB);
	foreach ($arrayNdimension as $keys => $values ) {
		print($keys . ' have ' . $values . ' value; ' );
		//print_r($subarray);
	}
	print(TEXT_TAB . TAG_BR);
	foreach ($arrayNdimension as $strings) {
		echo $strings['string'], TEXT_SPACE;
	}
	print(TEXT_TAB . TAG_BR);
	foreach ($arrayNdimension as $numbers) {
		echo $numbers['number'], TEXT_SPACE;
	}

	print(TAG_BR);
	function helloWorld() {
		return "Hello world from function";
	}
	echo helloWorld();

	function helloWorld2($parametr) {
		echo $parametr;
	}

	helloWorld2('Hello world from function with parametr');
	
	print(TAG_BR.TAG_H2_OPEN.
		'Classes and their objects'.
		TAG_H2_CLOSE.TAG_BR);
	//-------------------------OOP
	class HelloWorldClass {
		public static $variable = 
		"This is static variable value wich can be called without instance of a class";
		private $name = "Propertys";
		
		public function __construct($str) {
		  	$this->name = $str;
		}

		public function getString() {
			return "Methods and {$this->name}" ;
		}
	}

	$instance = new HelloWorldClass("added property by constructor");

	print($instance->getString());
	print(TAG_BR);
	
	print('var_dump() function can show this: '.  TAG_BR);
	print( var_dump($instance) .TAG_BR);
	print(HelloWorldClass::$variable . TAG_BR);

	//----------------------------------------------native functions
	print(TAG_BR . TAG_H2_OPEN .'native functions' . TAG_H2_CLOSE . TAG_BR );

	print(TAG_TABLE_OPEN . TAG_TR_OPEN . 
			TAG_TH_OPEN . "FUNCTIONS" . TAG_TH_CLOSE . 
			TAG_TH_OPEN . "DESCRIPTION" . TAG_TH_CLOSE . 
			TAG_TR_CLOSE) ;
	print(TAG_TR_OPEN . 
			TAG_TD_OPEN . "print(\$parameter)" . TAG_TD_CLOSE . 
			TAG_TD_OPEN . "prints its parameter" . TAG_TD_CLOSE . 
			TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "strlen(\$string)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns length of parameter string" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "substr(\$string, \$from, \$to)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns substring of string from index to index" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "strtoupper(\$string)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns uppercased it's parameter" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "strtolower(\$string)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns lowercased it's parameter" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "strpos(\$string, \$substring)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns postion of substring in string" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "array(\$parametrs)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns array type instance" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "array_push(\$arr, 'whattopush')" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "adds something to array" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "count(\$arr)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns length of array" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "sort(\$array)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "sorting an array" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "rsort($arr)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "reverse sorting an array" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "join('symbol', $arr)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns string with arr elements separated by symbol" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "unset(\$arr[index])" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "deletes item from array, or deletes arrat" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "is_a(\$object, 'ClassName')" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns true if object is instance of ClassName" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "property_exists(\$object, 'properyName')" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns true if object have a properyName" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "method_exists(\$object, 'methodName')" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns true if object have a pmethodName" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "var_dump(\$objORarr)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns info about object or array" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "round(\$floatnum, \$precision)" . 
		TAG_TD_CLOSE . 
		TAG_TD_OPEN . 
		"returns rounded floatpoint number to integer,".TAG_BR." or 
		to float precision of decimals after dot" . 
		TAG_TD_CLOSE . TAG_TR_CLOSE );	
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "rand(\$from, \$to)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns random integer from to" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TR_OPEN . 
		TAG_TD_OPEN . "dechex($decimal)" . TAG_TD_CLOSE . 
		TAG_TD_OPEN . "returns hexadecimal number from decimal" . TAG_TD_CLOSE . 
		TAG_TR_CLOSE );
	print(TAG_TABLE_CLOSE);
 ?> 
	<!-- //------------------------
	
	/*

	That :: is the scope resolution operator.
	static


print(TAG_TR_OPEN . 
TAG_TD_OPEN."round(\$floatnum, \$precision)".TAG_TD_CLOSE.TAG_TD_OPEN."returns rounded floatpoint number to integer, or to float precision of decimals after dot" .TD_CLOSE . TAG_TR_CLOSE );	
	*/

  -->