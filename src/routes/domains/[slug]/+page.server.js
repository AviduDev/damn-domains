import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'

export const prerender = true
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { domain } = await hygraph.request(
		`query DomainIndex ($slug: String!) {
            domain (where: {slug: $slug}) {
                name
				details
				price
                image {
                  url
                }
				categories {
					name
					slug
					id
				  }
			
            }
        }`,
		{
			slug
		}
	)

	return {
		domain
	}
}