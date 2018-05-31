const Card5 = {
//--------------------------------left side
	"left":`
<xmp>
<h3>forms helloworld</h3>

<form action="https://google.com/search" 
	method="get" 
	style="border: 1px solid black; width: 30%;">
	<label for="form-input-serch-google">Search helloworld with google:</label>
	<input type="text" name="q" value="hello world" id="form-input-serch-google">
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	<label for="form-input-login" style="width: 35%;">Login:</label>
	<input type="login" name="login" id="form-input-login">
	<br>
	<label for="form-input-password" style="width: 35%;">Password:</label>
	<input type="password" name="password" id="form-input-password">
	<br>
	<label for="form-input-submit" style="width: 35%;">Sign in:</label>
	<input type="submit" value="enter" id="form-input-submit">
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	<textarea rows="3" cols="45">
		Textarea is for comments or something else.
	</textarea>
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	<input type="checkbox" name="" checked >checkbox helloworld<br>
	<input type="radio" name="group" value="1">radio 1 helloworld<br>
	<input type="radio" name="group" value="2" checked>radio 2 helloworld<br>
	<input type="radio" name="group" value="3">radio 3 helloworld
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	<select name="select">
		<option value="option1">select option 1</option>
		<option value="option2">select option 2</option>
	</select>
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	<select name="select-multiple" size="2"  multiple>
		<option value="option1">multiple select option 1</option>
		<option value="option2" selected>multiple select option 2</option>
	</select>
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;"
	enctype="multipart/form-data">
	<input type="file" name="name-of-uploadfile-input" >
</form>
<br>
<form action="" method="" style="border: 1px solid black; width: 30%;">
	Hidden input
	<input type="hidden" name="sysinfo" value="getSomeSysInfo" >
</form>
</xmp>
	`,
//xmp against &lt; &gt;
//----------------------------------right side
	"right":`
	<h3>forms helloworld</h3>

	<form action="https://google.com/search" 
		method="get" 
		style="border: 1px solid black; width: 30%;">
		<label for="form-input-serch-google">Search helloworld with google:</label>
		<input type="text" name="q" value="hello world" id="form-input-serch-google">
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">

		<label for="form-input-login" style="width: 35%;">Login:</label>
		<input type="login" name="login" id="form-input-login">
		<br>
		<label for="form-input-password" style="width: 35%;">Password:</label>
		<input type="password" name="password" id="form-input-password">
		<br>
		<label for="form-input-submit" style="width: 35%;">Sign in:</label>
		<input type="submit" value="enter" id="form-input-submit">
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">
		<textarea rows="3" cols="45">
			Textarea is for comments or something else.
		</textarea>
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">
		<input type="checkbox" name="" checked >checkbox helloworld<br>
		<input type="radio" name="group" value="1">radio 1 helloworld<br>
		<input type="radio" name="group" value="2" checked>radio 2 helloworld<br>
		<input type="radio" name="group" value="3">radio 3 helloworld
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">
		<select name="select">
			<option value="option1">select option 1</option>
			<option value="option2">select option 2</option>
		</select>
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">
		<select name="select-multiple" size="2"  multiple>
			<option value="option1">multiple select option 1</option>
			<option value="option2" selected>multiple select option 2</option>
		</select>
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;"
		enctype="multipart/form-data">
		<input type="file" name="name-of-uploadfile-input" >
	</form>
	<br>
	<form action="" method="" style="border: 1px solid black; width: 30%;">
		Hidden input
		<input type="hidden" name="sysinfo" value="getSomeSysInfo" >
	</form>
	`
}
export {Card5};