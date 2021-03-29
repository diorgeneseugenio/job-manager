import JobsApi from "#root/adapters/jobs";

const fetchAllJobsResolver = async () => {
  return await JobsApi.fetchAllJobs();
};

export default fetchAllJobsResolver;
