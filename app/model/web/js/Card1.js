const Card1 = {
//--------------------------------left side
	"left":`
<xmp>
<!DOCTYPE html>
<script type="text/javascript">
	document.write("<h1>Hello ");
	document.writeln("JavaScript!</h1");
	//document.body.innerHTML +="Hello";

	/*------*/
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

	document.body.innerHTML += TAG_BR.concat("Version: ","ECMAScript6;").concat(TAG_BR);
	//------------------------------------------------------------------------------
	function bodyPWrite(str){
		document.body.innerHTML += TAG_P_OPEN + str + TAG_P_CLOSE;
	}
	function bodyH2Write(str){
		document.body.innerHTML += TAG_H2_OPEN + str + TAG_H2_CLOSE;
	}
	//------------------------------------------------------------------------------------


//	document.body.innerHTML += TAG_BR.concat("1").concat("2").concat("3");
	bodyH2Write( "Primitive types:" );
	let booleanVar = true;
	let numberInt = 42;
	let numberFloat = 3.14;
	let stringValue = "string";
	let undefinedValue = undefined;
	let nullValue = null;
	let emptyArray = [];
	let empryObject = {};

	bodyPWrite(\`booleanVar: \${TEXT_TAB}\${booleanVar}\${TEXT_TAB} \${typeof booleanVar}\` );
	bodyPWrite(\`numberInt: \${TEXT_TAB}\${numberInt}\${TEXT_TAB} \${typeof numberInt}\`);
	bodyPWrite(\`numberFloat: \${TEXT_TAB}\${numberFloat}\${TEXT_TAB} \${typeof numberFloat}\`);
	bodyPWrite(\`stringValue: \${TEXT_TAB}\${stringValue}\${TEXT_TAB} \${typeof stringValue}\`);
	bodyPWrite(\`undefinedValue: \${TEXT_TAB}\${undefinedValue}\${TEXT_TAB} \${typeof undefinedValue}\`);
	bodyPWrite(\`nullValue: \${TEXT_TAB}\${nullValue}\${TEXT_TAB} \${typeof nullValue}\`);
	bodyPWrite(\`emptyArray: \${TEXT_TAB}\${emptyArray}\${TEXT_TAB} \${typeof emptyArray}\`);
	bodyPWrite(\`empryObject: \${TEXT_TAB}\${empryObject}\${TEXT_TAB} \${typeof empryObject}\`);

	bodyH2Write( "Arithmetic operations:" );
	bodyPWrite(\`42 + 3.14: \${TEXT_TAB}\${42 + 3.14}\` );
	bodyPWrite(\`42 - 3.14: \${TEXT_TAB}\${42 - 3.14}\` );
	bodyPWrite(\`42 / 3.14: \${TEXT_TAB}\${42 / 3.14}\` );
	bodyPWrite(\`42 * 3.14: \${TEXT_TAB}\${42 * 3.14}\` );
	bodyPWrite(\`42 % 3.14: \${TEXT_TAB}\${42 % 3.14}\` );
	bodyPWrite(\`42 + 3.14: \${TEXT_TAB}\${42 + 3.14}\` );
	let num42 = 42;
	bodyH2Write( "Assignment operations:" );
	bodyPWrite(\`num42 = 42 \${TEXT_TAB}\${num42}\` );
	bodyPWrite(\`num42 += 42 \${TEXT_TAB}\${num42+=3.14}\` );num42 = 42;
	bodyPWrite(\`num42 -= 42 \${TEXT_TAB}\${num42-=3.14}\` );num42 = 42;
	bodyPWrite(\`num42 /= 42 \${TEXT_TAB}\${num42/=3.14}\` );num42 = 42;
	bodyPWrite(\`num42 *= 42 \${TEXT_TAB}\${num42*=3.14}\` );num42 = 42;
	bodyPWrite(\`num42 %= 42 \${TEXT_TAB}\${num42%=3.14}\` );num42 = 42;
	bodyH2Write( "Increment, decrement:" );
	bodyPWrite(\`num42++; before: \${num42++}; after: \${num42};\` );num42 = 42;
	bodyPWrite(\`num42--; before: \${num42--}; after: \${num42};\` );num42 = 42;
	bodyPWrite(\`++num42; before: \${++num42}; after: \${num42};\` );num42 = 42;
	bodyPWrite(\`--num42; before: \${--num42}; after: \${num42};\` );num42 = 42;
	bodyH2Write( "Logic operations:" );
	bodyPWrite(\`1 : \${!!1}\`);
	bodyPWrite(\`0 : \${!!0}\`);
	bodyPWrite(\`'c' : \${!!'c'}\`);
	bodyPWrite(\`'' : \${!!''}\`);
	bodyPWrite(\`true : \${!!true}\`);
	bodyPWrite(\`false : \${!!false}\`);
	bodyPWrite(\`!true : \${!true}\`);
	bodyPWrite(\`!false : \${!false}\`);	
	bodyPWrite(\`true == true : \${true==true}\`);
	bodyPWrite(\`true == false : \${true==false}\`);
	bodyPWrite(\`false == false : \${false==false}\`);
	bodyPWrite(\`true != true : \${true!=true}\`);
	bodyPWrite(\`true != false : \${true!=false}\`);
	bodyPWrite(\`false != false : \${false!=false}\`);
	bodyPWrite(\`true && true : \${true&&true}\`);
	bodyPWrite(\`true && false : \${true&&false}\`);
	bodyPWrite(\`false && false : \${false&&false}\`);
	bodyPWrite(\`true || true : \${true||true}\`);
	bodyPWrite(\`true || false : \${true||false}\`);
	bodyPWrite(\`false || false : \${false||false}\`);

	function getBinary(number) {
		
	return number<2 ? 
			("" + number%2) : 
			( number==2 ? 
				(number/2 + "0"): 
				(""+getBinary((number - number%2)/2 )+ "" +number%2));
	}

	bodyH2Write( "Bitwise operations:" );

	bodyPWrite(\`0b0000: \${getBinary(0b0000)}\`);
	bodyPWrite(\`0b1111: \${getBinary(0b1111)}\`);

	bodyPWrite(\`~0b0000: \${getBinary(~0b0000)}\`);
	bodyPWrite(\`~0b1111: \${getBinary(~0b1111)}\`);

	bodyPWrite(\`0b0000 & 0b0000: \${getBinary(0b0000&0b0000)}\`);
	bodyPWrite(\`0b0001 & 0b0000: \${getBinary(0b0001&0b0000)}\`);
	bodyPWrite(\`0b0001 & 0b0001: \${getBinary(0b0001&0b0001)}\`);
	bodyPWrite(\`0b0000 & 0b0001: \${getBinary(0b0000&0b0001)}\`);

	bodyPWrite(\`0b0000 | 0b0000: \${getBinary(0b0000|0b0000)}\`);
	bodyPWrite(\`0b0001 | 0b0000: \${getBinary(0b0001|0b0000)}\`);
	bodyPWrite(\`0b0001 | 0b0001: \${getBinary(0b0001|0b0001)}\`);
	bodyPWrite(\`0b0000 | 0b0001: \${getBinary(0b0000|0b0001)}\`);

	bodyPWrite(\`0b0000 << 0b0000: \${getBinary(0b0000<<0b0000)}\`);
	bodyPWrite(\`0b0001 << 0b0000: \${getBinary(0b0001<<0b0000)}\`);
	bodyPWrite(\`0b0001 << 0b0001: \${getBinary(0b0001<<0b0001)}\`);
	bodyPWrite(\`0b0000 << 0b0001: \${getBinary(0b0000<<0b0001)}\`);

	bodyPWrite(\`0b0000 >> 0b0000: \${getBinary(0b0000>>0b0000)}\`);
	bodyPWrite(\`0b0001 >> 0b0000: \${getBinary(0b0001>>0b0000)}\`);
	bodyPWrite(\`0b0001 >> 0b0001: \${getBinary(0b0001>>0b0001)}\`);
	bodyPWrite(\`0b0000 >> 0b0001: \${getBinary(0b0000>>0b0001)}\`);

	bodyPWrite(\`0b0000 ^ 0b0000: \${getBinary(0b0000^0b0000)}\`);
	bodyPWrite(\`0b0001 ^ 0b0000: \${getBinary(0b0001^0b0000)}\`);
	bodyPWrite(\`0b0001 ^ 0b0001: \${getBinary(0b0001^0b0001)}\`);
	bodyPWrite(\`0b0000 ^ 0b0001: \${getBinary(0b0000^0b0001)}\`);

	bodyPWrite(\`0b0000 >>> 0b0000: \${getBinary(0b0000>>>0b0000)}\`);
	bodyPWrite(\`0b0001 >>> 0b0000: \${getBinary(0b0001>>>0b0000)}\`);
	bodyPWrite(\`0b0001 >>> 0b0001: \${getBinary(0b0001>>>0b0001)}\`);
	bodyPWrite(\`0b0000 >>> 0b0001: \${getBinary(0b0000>>>0b0001)}\`);


	bodyH2Write( "if condition:" );
	if(num42 == 42) bodyPWrite("//processing if");
	else if(num42 == 3.14) bodyPWrite("//should never rich this");
	else bodyPWrite("//should never rich this too");
	bodyH2Write( "switch condition:" );
	switch(num42){
		case 3.14: bodyPWrite("//should never rich this"); break;
		case 42: bodyPWrite("//processing switch"); break;
		default: bodyPWrite("ERROR"); break;
	}
	bodyH2Write( "ternary condition:" );
	bodyPWrite(\`num42 != 3.14 ? "yes" : "nope"; returns: \${num42 != 3.14 ? "yes" : "nope"}\`);

	bodyH2Write( "Classes and objects:" );

	class HelloWorld {
		
		constructor(str) {
			this._fieldOfClass = "Hello World!"+str;
		}
		sayHello(){
			return this._fieldOfClass;
		}
	}

	let instansOfClass = new HelloWorld(" and JavaScript!");

	bodyPWrite(instansOfClass.sayHello());
	 
</script>
</xmp>
	`,
//xmp against &lt; &gt;
//----------------------------------right side
	"right":`
	<h1>Hello JavaScript!</h1><br>Version: ECMAScript6;<br><h2>Primitive types:</h2><p>booleanVar: &nbsp;&nbsp;&nbsp;true&nbsp;&nbsp;&nbsp; boolean</p><p>numberInt: &nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp; number</p><p>numberFloat: &nbsp;&nbsp;&nbsp;3.14&nbsp;&nbsp;&nbsp; number</p><p>stringValue: &nbsp;&nbsp;&nbsp;string&nbsp;&nbsp;&nbsp; string</p><p>undefinedValue: &nbsp;&nbsp;&nbsp;undefined&nbsp;&nbsp;&nbsp; undefined</p><p>nullValue: &nbsp;&nbsp;&nbsp;null&nbsp;&nbsp;&nbsp; object</p><p>emptyArray: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; object</p><p>empryObject: &nbsp;&nbsp;&nbsp;[object Object]&nbsp;&nbsp;&nbsp; object</p><h2>Arithmetic operations:</h2><p>42 + 3.14: &nbsp;&nbsp;&nbsp;45.14</p><p>42 - 3.14: &nbsp;&nbsp;&nbsp;38.86</p><p>42 / 3.14: &nbsp;&nbsp;&nbsp;13.375796178343949</p><p>42 * 3.14: &nbsp;&nbsp;&nbsp;131.88</p><p>42 % 3.14: &nbsp;&nbsp;&nbsp;1.1799999999999984</p><p>42 + 3.14: &nbsp;&nbsp;&nbsp;45.14</p><h2>Assignment operations:</h2><p>num42 = 42 &nbsp;&nbsp;&nbsp;42</p><p>num42 += 42 &nbsp;&nbsp;&nbsp;45.14</p><p>num42 -= 42 &nbsp;&nbsp;&nbsp;38.86</p><p>num42 /= 42 &nbsp;&nbsp;&nbsp;13.375796178343949</p><p>num42 *= 42 &nbsp;&nbsp;&nbsp;131.88</p><p>num42 %= 42 &nbsp;&nbsp;&nbsp;1.1799999999999984</p><h2>Increment, decrement:</h2><p>num42++; before: 42; after: 43;</p><p>num42--; before: 42; after: 41;</p><p>++num42; before: 43; after: 43;</p><p>--num42; before: 41; after: 41;</p><h2>Logic operations:</h2><p>1 : true</p><p>0 : false</p><p>'c' : true</p><p>'' : false</p><p>true : true</p><p>false : false</p><p>!true : false</p><p>!false : true</p><p>true == true : true</p><p>true == false : false</p><p>false == false : true</p><p>true != true : false</p><p>true != false : true</p><p>false != false : false</p><p>true &amp;&amp; true : true</p><p>true &amp;&amp; false : false</p><p>false &amp;&amp; false : false</p><p>true || true : true</p><p>true || false : true</p><p>false || false : false</p><h2>Bitwise operations:</h2><p>0b0000: 0</p><p>0b1111: 1111</p><p>~0b0000: -1</p><p>~0b1111: 0</p><p>0b0000 &amp; 0b0000: 0</p><p>0b0001 &amp; 0b0000: 0</p><p>0b0001 &amp; 0b0001: 1</p><p>0b0000 &amp; 0b0001: 0</p><p>0b0000 | 0b0000: 0</p><p>0b0001 | 0b0000: 1</p><p>0b0001 | 0b0001: 1</p><p>0b0000 | 0b0001: 1</p><p>0b0000 &lt;&lt; 0b0000: 0</p><p>0b0001 &lt;&lt; 0b0000: 1</p><p>0b0001 &lt;&lt; 0b0001: 10</p><p>0b0000 &lt;&lt; 0b0001: 0</p><p>0b0000 &gt;&gt; 0b0000: 0</p><p>0b0001 &gt;&gt; 0b0000: 1</p><p>0b0001 &gt;&gt; 0b0001: 0</p><p>0b0000 &gt;&gt; 0b0001: 0</p><p>0b0000 ^ 0b0000: 0</p><p>0b0001 ^ 0b0000: 1</p><p>0b0001 ^ 0b0001: 0</p><p>0b0000 ^ 0b0001: 1</p><p>0b0000 &gt;&gt;&gt; 0b0000: 0</p><p>0b0001 &gt;&gt;&gt; 0b0000: 1</p><p>0b0001 &gt;&gt;&gt; 0b0001: 0</p><p>0b0000 &gt;&gt;&gt; 0b0001: 0</p><h2>if condition:</h2><p>//processing if</p><h2>switch condition:</h2><p>//processing switch</p><h2>ternary condition:</h2><p>num42 != 3.14 ? "yes" : "nope"; returns: yes</p><h2>Classes and objects:</h2><p>Hello World! and JavaScript!</p>
	`
}
export {Card1};