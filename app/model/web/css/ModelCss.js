import {Card1} from '/helloworld/app/model/web/css/Card1.js';
import {Card2} from '/helloworld/app/model/web/css/Card2.js';
import {Card3} from '/helloworld/app/model/web/css/Card3.js';

const ModelCss = [
	{
		"tag":"div",
		"class":"flex-container", 
		"innerHTM": 
		[
			{
				"tag":"code",
				"class":"flex-item codeLeft", 
				"innerHTM": Card1.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card1.right 
			}
		] 
	},

	{
		"tag":"div",
		"class":"flex-container", 
		"innerHTM": 
		[
			{
				"tag":"code",
				"class":"flex-item codeLeft", 
				"innerHTM": Card2.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card2.right 
			}
		] 
	},

	{
		"tag":"div",
		"class":"flex-container", 
		"innerHTM": 
		[
			{
				"tag":"code",
				"class":"flex-item codeLeft", 
				"innerHTM": Card3.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card3.right 
			}
		] 
	}
]
export {ModelCss};




// 	const txt1 = `
// /*selector*/ { /*property*/ }
// 	`;

// 	const txt2 = `
// 	blahblah
// 	`;
