import CompaniesApi from "#root/adapters/companies";

const fetchCompanyResolver = async (obj, { id }) => {
  return await CompaniesApi.fetchCompany(id);
};

export default fetchCompanyResolver;
