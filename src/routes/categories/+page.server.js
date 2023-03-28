import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '$env/static/private';

export const prerender = true;

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	});

	const { categories } = await hygraph.request(
		`query MyQuery {
      categories {
        name
        slug
        id
        domains {
          name
          id
          price
          image {
            url
          }
        }
      }
    }`
	);

	return {
		categories
	};
};
