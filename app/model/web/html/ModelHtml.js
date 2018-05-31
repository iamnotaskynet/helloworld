import {Card1} from './Card1.js';
import {Card2} from './Card2.js';
import {Card3} from './Card3.js';
import {Card4} from './Card4.js';
import {Card5} from './Card5.js';
import {Card6} from './Card6.js';

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
