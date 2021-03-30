import got from "got";

const JOBS_API_URI = "http://job-manager-api:8800";

export default class JobsApi {
  static async fetchAllJobs() {
    const body = await got.get(`${JOBS_API_URI}/jobs`).json();
    return body;
  }

  static async fetchJob(id) {
    const body = await got.get(`${JOBS_API_URI}/jobs/${id}`).json();
    return body;
  }

  static async createJob({
    companyId,
    title,
    description,
    salary,
    benefits,
    skills,
    allowRemote,
  }) {
    const body = await got
      .post(`${JOBS_API_URI}/jobs`, {
        json: {
          companyId,
          title,
          description,
          salary,
          benefits,
          skills,
          allowRemote,
        },
      })
      .json();
    return body;
  }

  static async updateJob(
    id,
    {
      companyId,
      title,
      description,
      salary,
      benefits,
      skills,
      allowRemote,
      ended,
    }
  ) {
    try {
      const body = await got
        .put(`${JOBS_API_URI}/jobs/${id}`, {
          json: {
            companyId,
            title,
            description,
            salary,
            benefits,
            skills,
            allowRemote,
            ended,
          },
        })
        .json();
      return body;
    } catch (e) {
      throw new Error(`Erro ao atualizar a vaga ${e}`);
    }
  }

  static async deleteJob(id) {
    try {
      const body = await got.delete(`${JOBS_API_URI}/jobs/${id}`).json();
      return body;
    } catch (e) {
      throw new Error(`Erro ao deletar a vaga ${e}`);
    }
  }

  static async filterByCompany(companyId) {
    const body = await got
      .get(`${JOBS_API_URI}/jobs/filterByCompany/${companyId}`)
      .json();
    return body;
  }
}
