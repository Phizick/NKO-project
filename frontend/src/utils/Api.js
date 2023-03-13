class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
    }

    getInfo = async (url) => {
        const res = await fetch(`${this._url}/${url}`, {
        method: 'GET',
        headers: this._headers
      });
      return this._getResponseData(res);
    }
}

// Тестовый API:

const api = new Api({
  url: 'https://api.atlas.msk.ru/api/v1',
  headers: {
    "Content-Type": "application/json",
  }
});

// const api = new Api({
//     url: 'https://motionfoundation.ru/api/v1/',
//     headers: {
//       "Content-Type": "application/json",
//     }
// });



export default api;
