import 'babel-polyfill';

export default class ApiService {

  _apiBase = 'http://localhost:8080';
  //_apiBase = 'http://192.168.1.131:8080';

  async getResource(url, params) {
    const res = await fetch(`${this._apiBase}${url}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
                },
        method: "POST",
      //  body: "param1=value1&param2=value2"
      body: params
      }
    );

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


  async isUserNameExist(name) {
    let res = this.getResource("/account/username/", `username=${name}`);
    return res;
  }

  async isUserEmailExist(email) {

    let res = this.getResource("/account/useremail/",  `email=${email}`);
    return res;
  }

}
