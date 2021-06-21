import axios from 'axios'

export default axios.create({
	//this can also be in an env
	baseURL: `https://api-test.innoloft.com/`,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
})
