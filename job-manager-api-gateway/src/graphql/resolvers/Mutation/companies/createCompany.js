import CompaniesApi from "#root/adapters/companies";

const createCompanyResolver = async (
  obj,
  { logo, name, aboutDescription, city, state }
) => {
  return await CompaniesApi.createCompany({
    logo,
    name,
    aboutDescription,
    city,
    state,
  });
};

export default createCompanyResolver;
