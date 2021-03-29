import CompaniesApi from "#root/adapters/companies";

const updateCompanyResolver = async (
  obj,
  { id, logo, name, aboutDescription, city, state }
) => {
  try {
    await CompaniesApi.updateCompany(id, {
      logo,
      name,
      aboutDescription,
      city,
      state,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export default updateCompanyResolver;
