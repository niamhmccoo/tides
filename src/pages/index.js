import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

const env = graphql`
	query IndexPage {
		site {
			siteMetadata {
				tidesApiKey
			}
		}
	}
`;

const tideData = async () => {
	const result = fetch(
		'https://tides.p.rapidapi.com/tides?latitude=53.2941&longitude=6.1336&timestamp=1619014751&duration=1440',
		{
			headers: {
				'X-RapidAPI-Key': process.env.TIDES_API_KEY,
			},
		}
	);
	return result.extremes[0];
};

const IndexPage = () => {
	useStaticQuery(env);
	console.log(tideData());

	return (
		<>
			<h1>Tides</h1>
			<p>Here's some info about the tides in Dublin...</p>
			<p>{JSON.stringify(tideData())}</p>
		</>
	);
};

export default IndexPage;
