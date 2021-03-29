import JobsApi from "#root/adapters/jobs";

const createJobResolver = async (
  obj,
  { companyId, title, description, salary, benefits, skills, allowRemote }
) => {
  return await JobsApi.createJob({
    companyId,
    title,
    description,
    salary,
    benefits,
    skills,
    allowRemote,
  });
};

export default createJobResolver;
