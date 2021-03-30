import JobsApi from "#root/adapters/jobs";

const filterByCompanyResolver = async (obj, { companyId }) => {
  return await JobsApi.filterByCompany(companyId);
};

export default filterByCompanyResolver;
