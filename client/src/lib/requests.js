const BASE_URL = 'http://localhost:3000';

export const Trip = {
    getAll() {
        return fetch(
            `${BASE_URL}/trips`,
            {
                headers: {}
            }
        ).then(res => res.json());
    }
};