import {Card1} from 'https://iamnotaskynet.github.io/helloworld/app/model/server/php/Card1.js';

const ModelPhp = [
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
	}
	
]

export {ModelPhp};