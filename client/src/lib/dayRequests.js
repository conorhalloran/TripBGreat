import ApiRoutes from './apiRoutes'

const getJWT = () => {
	return localStorage.getItem('jwt')
}

export const Day = {
	async get(id) {
		const res = await fetch(`${ApiRoutes.baseUrl}/days/${id}`, { headers: { AUTHORIZATION: `jwt ${getJWT()}` } })
		const data = await res.json()
		return data
	},
	async create(params) {
		const res = await fetch(`${ApiRoutes.baseUrl}/:trip_id/days`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				AUTHORIZATION: `jwt ${getJWT()}`
			},
			body: JSON.stringify(params)
		})
		const data = await res.json()
		return data
	},
	async update(params, id) {
		const res = await fetch(`${ApiRoutes.baseUrl}/days/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				AUTHORIZATION: `jwt ${getJWT()}`
			},
			body: JSON.stringify(params)
		})
		const data = await res.json()
		return data
	},
	async destroy(id) {
		const res = await fetch(`${ApiRoutes.baseUrl}/days/${id}`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				AUTHORIZATION: `jwt ${getJWT()}`
			}
		})
		const data = await res.json()
		return data
	}
}

export const Token = {
	async create(params) {
		const res = await fetch(`${ApiRoutes.baseUrl}/tokens`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
		})
		if (res.status === 200) {
			const data = await res.json()
			return data
		} else {
			return { error: 'Not found' }
		}
	},
	async get(id) {
		const res = await fetch(`${ApiRoutes.baseUrl}/users/${id}`, { headers: { AUTHORIZATION: `jwt ${getJWT()}` } })
		const data = await res.json()
		return data
	}
}
export const User = {
	async create(params) {
		const res = await fetch(`${ApiRoutes.baseUrl}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
		})
		if (res.status === 200) {
			const data = await res.json()
			return data
		} else {
			return { error: 'Not found' }
		}
	}
}
