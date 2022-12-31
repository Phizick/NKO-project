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

    getInfo = (url) => {
        return fetch(`${this._url}/${url}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(this._getResponseData);
    }
}

const api = new Api({
    url: 'https://api.atlas.msk.ru/api/v1',
    headers: {
      "Content-Type": "application/json",
    }
});

export default api;
