const baseUrl = "http://localhost:3000";

const Routes = {
  baseUrl,
  trips: {
    update(id) {
      `${baseUrl}/trips/${id}`;
    }
  }
};

export default Routes;
