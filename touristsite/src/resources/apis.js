import axios from 'axios'
// import cookie from "react-cookies";


// 35.180.135.175

class Api {
	// async callAPI (module, params){
	// 	if(module=='game'){
	// 		return await getGame(params)
	// 	}
	// }

	async getUsers () {
		console.log("getting registration details")
		const response = await axios.get('http://localhost:3000/users/')

		console.log(response)
        return response.data
	}

	// login
	async login(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: 'http://localhost:3000/login/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// Get requests
	async getRequests () {
		console.log("getting registration details")
		const response = await axios.get('http://localhost:3000/requests/')

		console.log(response)
        return response
	}

	// add request
	async sendRequest(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: 'http://localhost:3000/requests/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}

	// Get configurations
	async getConfigurations () {
		console.log("getting registration details")
		const response = await axios.get('http://localhost:3000/configs/')

		console.log(response)
        return response
	}

	// update configurations
	async updateConfigs(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: 'http://localhost:3000/configs/',
			data: params,
			// headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			// }
		}

		const res = await axios(config)

		return await res
	}
}

export default Api