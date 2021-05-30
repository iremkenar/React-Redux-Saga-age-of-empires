const API_BASE_ADDRESS = 'http://localhost:4000';
export default class Api {
  static getUnits() {
    const uri = API_BASE_ADDRESS + '/units';
    return fetch(uri, { method: 'GET' });
  }
}
