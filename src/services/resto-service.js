export default class RestoService {
    _apiBase = 'http://localhost:3001';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Невозможно получить данные с ${url}. статус: ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu/');
    }
}

