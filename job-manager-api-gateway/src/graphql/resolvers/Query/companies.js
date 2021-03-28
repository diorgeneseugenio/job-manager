import CompaniesApi from "#root/adapters/companies";

const companiesResolver = async () => {
  return await CompaniesApi.fetchAllCompanies();
};

export default companiesResolver;
