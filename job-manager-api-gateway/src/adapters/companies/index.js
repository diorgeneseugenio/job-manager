import got from "got";

const COMPANIES_API_URI = "http://job-manager-api:8800";

export default class CompaniesApi {
  static async fetchAllCompanies() {
    const body = await got.get(`${COMPANIES_API_URI}/companies`).json();
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
}
