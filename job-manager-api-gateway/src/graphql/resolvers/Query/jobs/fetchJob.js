import JobsApi from "#root/adapters/jobs";

const fetchJobResolver = async (obj, { id }) => {
  return await JobsApi.fetchJob(id);
};

export default fetchJobResolver;
