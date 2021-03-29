import setupRoutesCompanies from "./companies";
import setupRoutesJobs from "./jobs";

const setupRoutes = (app) => {
  setupRoutesCompanies(app);
  setupRoutesJobs(app);
};

export default setupRoutes;
