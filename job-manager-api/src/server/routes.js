import { Company } from "#root/db/models";

const setupRoutes = (app) => {
  app.get("/companies", async (req, res, next) => {
    const companies = await Company.findAll();
    return res.json(companies);
  });
};

export default setupRoutes;
