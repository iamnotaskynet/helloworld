let ModelHtml = function(args) {

	const txt1 = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;title&gt;helloworld&lt;/title&gt;
	&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;helloworld&lt;/h1&gt;
	&lt;h2&gt;helloworld&lt;/h2&gt;
	&lt;h3&gt;helloworld&lt;/h3&gt;
	&lt;h4&gt;helloworld&lt;/h4&gt;
	&lt;h5&gt;helloworld&lt;/h5&gt;
	&lt;h6&gt;helloworld&lt;/h6&gt;

	&lt;p&gt;
		&lt;big&gt;helloworld&lt;/big&gt;
		&lt;small&gt;helloworld&lt;/small&gt;
		&lt;mark&gt;helloworld &lt;/mark&gt;
		&lt;b&gt;helloworld&lt;/b&gt;
		&lt;i&gt;helloworld&lt;/i&gt;
		&lt;ins&gt;helloworld&lt;/ins&gt;
		&lt;q&gt;helloworld&lt;/q&gt;
		helloworld
	&lt;/p&gt;
	&lt;blockquote>helloworld&lt;/blockquote&gt;

	&lt;script src="./main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
	`;

	const txt2 = `
<h1>helloworld</h1>
<h2>helloworld</h2>
<h3>helloworld</h3>
<h4>helloworld</h4>
<h5>helloworld</h5>
<h6>helloworld</h6>
<p>	
	<big>helloworld</big>
	<small>helloworld</small>
	<mark>helloworld </mark>
	<b>helloworld</b>
	<i>helloworld</i>
	<ins>helloworld</ins>
	<q>helloworld</q>
	

	helloworld
</p>
<blockquote>helloworld</blockquote>
	`;

	const html5 = [ 
		{"tag":"div", "class":"container", "id":"html5container", "innerHTM": "dgwrtnxcvbnmry" } 
	];

	const html5left = [ 
		{"tag":"code", "class":"item", "":"", "innerHTM": txt1 }
	];

	const html5right = [ 
		{"tag":"div", "class":"item", "":"", "innerHTM": txt2 } 
	];

	let getElements = function(wichTotake) {
		switch (wichTotake) {
			case 'html5':
				return html5;
				break;
			case 'html5left':
				return html5left;
				break;
			case 'html5right':
				return html5right;
				break;
			default:
				return "ERROR";
				break;
		}
	};

	return getElements(args);

}
export {ModelHtml};