import JobApi from "#root/adapters/jobs";

const updateJobResolver = async (
  obj,
  {
    id,
    companyId,
    title,
    description,
    salary,
    benefits,
    skills,
    allowRemote,
    ended,
  }
) => {
  try {
    await JobApi.updateJob(id, {
      companyId,
      title,
      description,
      salary,
      benefits,
      skills,
      allowRemote,
      ended,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export default updateJobResolver;
