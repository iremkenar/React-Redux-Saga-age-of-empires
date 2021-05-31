const API_BASE_ADDRESS = 'http://localhost:4000';
export default class Api {
  static getUnits(id = '') {
    const url = API_BASE_ADDRESS + '/units' + id;
    return fetch(url, { method: 'GET' });
  }
}
