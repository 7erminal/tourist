import axios from 'axios'
// import cookie from "react-cookies";


// 35.180.135.175
// var hosturl = 'http://2a05:d01c:482:8500:ea7b:1553:fce4:b373:3000';
var hosturl = 'http://localhost:3000';

class Api {
	// async callAPI (module, params){
	// 	if(module=='game'){
	// 		return await getGame(params)
	// 	}
	// }

	async getUsers () {
		console.log("getting registration details")
		const response = await axios.get(`${hosturl}/users/`)

		console.log(response)
        return response.data
	}

	// login
	async login(params){
		console.log("what is being sent")

		const config = {
			method: 'post',
			url: `${hosturl}/login/`,
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
		const response = await axios.get(`${hosturl}/requests/`)

		console.log(response)
        return response
	}

	// add request
	async sendRequest(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: `${hosturl}/requests/`,
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
		const response = await axios.get(`${hosturl}/configs/`)

		console.log(response)
        return response
	}

	// update configurations
	async updateConfigs(params){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'post',
			url: `${hosturl}/configs/`,
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