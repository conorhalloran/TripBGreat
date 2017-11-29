const BASE_URL = 'http://localhost:3000';

const getJWT = () => {
  return localStorage.getItem('jwt')
}

export const Trip = {
    async getAll () {
    const res = await fetch(
      `${BASE_URL}/trips`,
      { headers: { 'AUTHORIZATION': `JWT ${getJWT()}` }}
    )
    const data = await res.json()
    return data
  }
};

export const Token = {
  async create (params) {
    const res = await fetch(
      `${BASE_URL}/tokens`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }
    )
    if (res.status === 200) {
      const data = await res.json()
      return data
    } else {
      return {error: 'Not found'}
    }
  }
}