import CompaniesApi from "#root/adapters/companies";

const fetchAllCompaniesResolver = async () => {
  return await CompaniesApi.fetchAllCompanies();
};

export default fetchAllCompaniesResolver;
