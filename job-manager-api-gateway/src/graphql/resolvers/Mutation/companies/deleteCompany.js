import CompaniesApi from "#root/adapters/companies";

const deleteCompanyResolver = async (obj, { id }) => {
  try {
    await CompaniesApi.deleteCompany(id);
    return true;
  } catch (e) {
    return false;
  }
};

export default deleteCompanyResolver;
