import CompaniesApi from "#root/adapters/CompaniesApi";

const companiesResolver = async () => {
  return await CompaniesApi.fetchAllCompanies();
};

export default companiesResolver;
