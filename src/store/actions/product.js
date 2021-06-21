import http from '../../utils/http'
import * as ACTIONS from './actionTypes'

export const getProduct = () => async (dispatch) => {
	try {
		const response = await http.get('/product/6781')
		const trl = await http.get('/trl')
		dispatch({ type: ACTIONS.GETPRODUCT, payload: response })
		dispatch({ type: ACTIONS.GETTRL, payload: trl })
	} catch (error) {
		const data = {
			id: 6781,
			name: 'LoftOS',
			description:
				'Innoloft <b>creates</b> the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n',
			picture: 'https://img.innoloft.de/products/product_783016a3.png',
			type: {
				id: 2,
				name: 'Software',
			},
			categories: [
				{
					id: 5101,
					name: 'IT platforms',
				},
				{
					id: 5100,
					name: 'B2B marketplaces',
				},
			],
			implementationEffortText: null,
			investmentEffort: '< 25.000€',
			trl: {
				id: 9,
				name:
					'TRL 9 – Actual system proven in operational environment (established product available)',
			},
			user: {
				id: 284,
				email: 'c.stirner@innoloft.com',
				firstName: 'Christopher',
				lastName: 'Stirner',
				sex: 1,
				profilePicture: 'https://img.innoloft.de/users/user_8b245d25.png',
				position: 'Chief Strategy Officer',
			},
			company: {
				name: 'Innoloft GmbH',
				logo: 'https://img.innoloft.de/logos/unt_7838d306.png',
				address: {
					id: null,
					country: {
						name: 'Deutschland',
						region: null,
					},
					state: null,
					city: {
						name: 'Aachen',
						countryId: null,
						stateId: null,
					},
					street: 'Jülicher Straße',
					house: '72a',
					zipCode: '52070',
					longitude: '6.100367',
					latitude: '50.779729',
					fallbackString: null,
					cityRegion: null,
				},
			},
			businessModels: [
				{
					id: 65,
					name: 'Pay-Per-Use',
				},
				{
					id: 1155,
					name: 'Subscription',
				},
				{
					id: 374,
					name: 'White-Label',
				},
				{
					id: 66,
					name: 'Peer-to-Peer (P2P)',
				},
			],
		}

		const trl = [
			{
				id: '1',
				name: 'TRL 1 – Basic principles observed (product idea available)',
				description: null,
			},
			{
				id: '2',
				name: 'TRL 2 – Technology concept formulated (business plan available)',
				description: null,
			},
			{
				id: '3',
				name: 'TRL 3 – Experimental proof of concept',
				description: null,
			},
			{
				id: '4',
				name: 'TRL 4 – Technology validated in lab',
				description: null,
			},
			{
				id: '5',
				name:
					'TRL 5 – Technology validated in relevant environment (prototype available)',
				description: null,
			},
			{
				id: '6',
				name: 'TRL 6 – Technology demonstrated in relevant environment',
				description: null,
			},
			{
				id: '7',
				name:
					'TRL 7 – System prototype demonstration in operational environment (pilot customer available)',
				description: null,
			},
			{
				id: '8',
				name: 'TRL 8 – System complete and qualified',
				description: null,
			},
			{
				id: '9',
				name:
					'TRL 9 – Actual system proven in operational environment (established product available)',
				description: null,
			},
		]
		dispatch({ type: ACTIONS.GETPRODUCT, payload: data })
		dispatch({ type: ACTIONS.GETTRL, payload: trl })
		console.log('error', error)
	}
}
