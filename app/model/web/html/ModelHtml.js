import {Card1} from '/app/model/web/html/Card1.js';
import {Card2} from '/app/model/web/html/Card2.js';
import {Card3} from '/app/model/web/html/Card3.js';
import {Card4} from '/app/model/web/html/Card4.js';
import {Card5} from '/app/model/web/html/Card5.js';
import {Card6} from '/app/model/web/html/Card6.js';

const ModelHtml = [
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
	},

	{
		"tag":"div",
		"class":"flex-container", 
		"innerHTM": 
		[
			{
				"tag":"code",
				"class":"flex-item codeLeft", 
				"innerHTM": Card4.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card4.right 
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
				"innerHTM": Card5.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card5.right 
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
				"innerHTM": Card6.left
			},

			{
				"tag":"article", 
				"class":"flex-item aricleRight", 
				"innerHTM": Card6.right 
			} 
		] 
	}
]
export {ModelHtml};
