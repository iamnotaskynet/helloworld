const Card3 = {
//--------------------------------left side
	"left":`
table {
	border: 8px solid black;
	border-spacing:0px;
	width: 100%;
	  height: 250px;
}
caption {
	caption-side: bottom; 
	text-align: center;
}
th {
	padding: 12px; 
	border: 6px dashed grey;
	text-align: right;
}
td {
	padding: 10px; 
	border: 4px solid lightgrey;
}
	`,


//----------------------------------right side
	"right":`
<table style="border: 8px solid black; border-spacing:0px; width: 100%; height: 250px;">
	<caption style="caption-side: bottom; text-align: center;">caption helloworld</caption>
	<thead>
		<th colspan="5" style="padding: 12px; border: 6px dashed grey; text-align: right;">
			helloworld in th in thead in table
		</th>
	</thead>
	<tbody>
		<tr>
			<td style="padding: 10px; border: 4px solid lightgrey;">h</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">e</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">l</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">l</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">o</td>
		</tr>
		<tr>
			<td style="padding: 10px; border: 4px solid lightgrey;">w</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">o</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">r</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">l</td>
			<td style="padding: 10px; border: 4px solid lightgrey;">d</td>
		</tr>
	</tbody>
</table>
	`
}
export {Card3};