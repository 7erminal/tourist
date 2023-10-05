import axios from 'axios'
// import cookie from "react-cookies";


// 35.180.135.175
// var hosturl = 'http://18.168.239.227:3000';
var hosturl = 'https://bekaadventure.com/api';
// var hosturl = 'http://localhost:8000/api';

class Api {
	// async callAPI (module, params){
	// 	if(module=='game'){
	// 		return await getGame(params)
	// 	}
	// }

	async getUsers (token) {
		console.log("getting registration details")
		const config = {
			method: 'GET',
			url: `${hosturl}/users`,
			headers: {
				// 'X-CSRFTOKEN': cookie.load("csrftoken"),
				// "Access-Control-Allow-Origin":"*",
				// "accept": 'application/json',
				// "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
				"Authorization": `Bearer ${token}`
			}
		}

		const response = await axios(config)

		console.log(response)
        return response
	}

	async addUser (params, token) {
		const config = {
			method: 'POST',
			url: `${hosturl}/users/register`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
				"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// login
	async login(params){
		console.log("what is being sent")

		const config = {
			method: 'POST',
			url: `${hosturl}/users/login`,
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

	// update request
	async update_request(params, token){
		console.log("what is being sent")

		const config = {
			method: 'POST',
			url: `${hosturl}/requests/update-seen-status`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// Get requests
	async getRequests (token) {
		console.log("getting request details")
		console.log(`${hosturl}/requests`)

		const config = {
			method: 'GET',
			url: `${hosturl}/requests/`,
			headers: {
				// 'X-CSRFTOKEN': cookie.load("csrftoken"),
				// "Access-Control-Allow-Origin":"*",
				// "accept": 'application/json',
				// "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
				"Authorization": `Bearer ${token}`
			}
		}

		const response = await axios(config)

		console.log(response)
        return response
	}

	// add request
	async sendRequest(params, token){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'POST',
			url: `${hosturl}/requests`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// Get configurations
	async getConfigurations (token) {
		console.log("getting registration details with token "+token);
		console.log("Details ...")

		const config = {
			method: 'GET',
			url: `${hosturl}/system/configs`,
			headers: {
				// 'X-CSRFTOKEN': cookie.load("csrftoken"),
				// "Access-Control-Allow-Origin":"*",
				// "accept": 'application/json',
				// "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
				"Authorization": `Bearer ${token}`
			}
		}

		const response = await axios(config)



		console.log(response)
        return response
	}

	// update configurations
	async updateConfigs(params, token){
		console.log("what is being sent")
		console.log(params)

		const id_ = 1;

		const config = {
			method: 'PUT',
			url: `${hosturl}/system/configs/${id_}`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
				"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// add review
	async addReview(params, token){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'POST',
			url: `${hosturl}/reviews`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// update show review
	async updateShowReview(params, token){
		console.log("what is being sent")
		console.log(params)

		const config = {
			method: 'POST',
			url: `${hosturl}/reviews/show-review`,
			data: params,
			headers: {
			// 	'X-CSRFTOKEN': cookie.load("csrftoken"),
			// 	"Access-Control-Allow-Origin":"*",
			// 	"accept": 'application/json',
			// 	"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			"Authorization": `Bearer ${token}`
			}
		}

		const res = await axios(config)

		return await res
	}

	// Get configurations
	async getReviews (token) {
		console.log("getting user reviews ");
		console.log("Details ...")

		const config = {
			method: 'GET',
			url: `${hosturl}/reviews`,
			headers: {
				// 'X-CSRFTOKEN': cookie.load("csrftoken"),
				// "Access-Control-Allow-Origin":"*",
				// "accept": 'application/json',
				// "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
				"Authorization": `Bearer ${token}`
			}
		}

		const response = await axios(config)



		console.log(response)
        return response
	}

	// Delete review
	async deleteReview (params, token) {
		console.log("getting user reviews ");
		console.log("Details ...")

		const config = {
			method: 'DELETE',
			url: `${hosturl}/reviews`,
			data: params,
			headers: {
				// 'X-CSRFTOKEN': cookie.load("csrftoken"),
				// "Access-Control-Allow-Origin":"*",
				// "accept": 'application/json',
				// "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
				"Authorization": `Bearer ${token}`
			}
		}

		const response = await axios(config)



		console.log(response)
        return response
	}
}

export default Api