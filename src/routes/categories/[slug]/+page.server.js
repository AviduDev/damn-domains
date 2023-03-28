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

	const { category } = await hygraph.request(
		`query CategoryIndex ($slug: String!) {
            category (where: {slug: $slug}) {
				name
				id
				slug
				domains {
				  id
				  name
				  price
				  slug
				}
			
            }
        }`,
		{
			slug
		}
	)

	return {
		category
	}
}