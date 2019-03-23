import 'babel-polyfill';

export default class ApiService {

  // if api base url same as server host set is empty
  _apiBase = '';
  //_apiBase = 'http://192.168.1.131:8080';
  //_apiBase = "http://"+window.location.hostname;
  //_apiBase = "http://localhost:8080";

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


  // posting form data to api
  postForm(apiUrl, data) {
    fetch(`${this._apiBase}${apiUrl}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "POST",
        redirect: "follow",
        body: data,
      })
      .then(response => {
        // HTTP 301 response
        if (response.redirected) {
          window.location.replace(response.url);
        }

      })
      .catch(error => console.error(error));
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

    let res = this.getResource("/account/useremail/", `email=${email}`);
    return res;
  }

}
