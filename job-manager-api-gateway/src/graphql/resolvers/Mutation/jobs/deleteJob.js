import JobApi from "#root/adapters/jobs";

const deleteJobResolver = async (obj, { id }) => {
  try {
    await JobApi.deleteJob(id);
    return true;
  } catch (e) {
    return false;
  }
};

export default deleteJobResolver;
