import got from "got";

const COMPANIES_API_URI = "http://job-manager-api:8800";

export default class CompaniesApi {
  static async fetchAllCompanies() {
    const body = await got.get(`${COMPANIES_API_URI}/companies`).json();
    return body;
  }

  static async fetchCompany(id) {
    const body = await got.get(`${COMPANIES_API_URI}/companies/${id}`).json();
    return body;
  }

  static async createCompany({ logo, name, aboutDescription, city, state }) {
    const body = await got
      .post(`${COMPANIES_API_URI}/companies`, {
        json: { logo, name, aboutDescription, city, state },
      })
      .json();
    return body;
  }

  static async updateCompany(
    id,
    { logo, name, aboutDescription, city, state }
  ) {
    try {
      const body = await got
        .put(`${COMPANIES_API_URI}/companies/${id}`, {
          json: { logo, name, aboutDescription, city, state },
        })
        .json();
      return body;
    } catch (e) {
      throw new Error(`Erro ao atualizar a empresa ${e}`);
    }
  }

  static async deleteCompany(id) {
    try {
      const body = await got
        .delete(`${COMPANIES_API_URI}/companies/${id}`)
        .json();
      return body;
    } catch (e) {
      throw new Error(`Erro ao deletar a empresa ${e}`);
    }
  }
}
