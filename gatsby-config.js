require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'tides',
		tidesApiKey: process.env.TIDES_API_KEY,
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
