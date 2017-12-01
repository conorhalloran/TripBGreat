import ApiRoutes from "./apiRoutes";

const getJWT = () => {
  return localStorage.getItem("jwt");
};

export const Trip = {
  async getAll() {
    const res = await fetch(`${ApiRoutes.baseUrl}/trips`, { headers: { AUTHORIZATION: `JWT ${getJWT()}` } });
    const data = await res.json();
    return data;
  },
  async get(id) {
    const res = await fetch(`${ApiRoutes.baseUrl}/trips/${id}`, { headers: { AUTHORIZATION: `jwt ${getJWT()}` } });
    const data = await res.json();
    return data;
  },
  async create(params) {
    const res = await fetch(`${ApiRoutes.baseUrl}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `jwt ${getJWT()}`
      },
      body: JSON.stringify(params)
    });
    const data = await res.json();
    return data;
  },
  async update(params, id) {
    const res = await fetch(`${ApiRoutes.baseUrl}/trips/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `jwt ${getJWT()}`
      },
      body: JSON.stringify(params)
    });
    const data = await res.json();
    return data;
  },
  async destroy(id) {
    const res = await fetch(`${ApiRoutes.baseUrl}/trips/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `jwt ${getJWT()}`
      }
    });
    const data = await res.json();
    return data;
  }
};

export const Token = {
  async create(params) {
    const res = await fetch(`${ApiRoutes.baseUrl}/tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      return { error: "Not found" };
    }
  }
};
