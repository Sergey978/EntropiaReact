import 'babel-polyfill';

export default class ApiService {

  // _apiBase = 'http://localhost:8080';
  _apiBase = 'http://192.168.1.131:8080';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }


  async isUserNameExist(name){    
   return    this.getResource(`/account/username/${name}/`) ;
  }

}
