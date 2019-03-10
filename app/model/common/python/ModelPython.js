import {Card1} from '/app/model/common/python/Card1.js';

const ModelPython = [
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

export {ModelPython};