import { Company } from "#root/db/models";
import { paramsValidator } from "./utils";

const setupRoutesCompanies = (app) => {
  app.get("/companies", async (req, res, next) => {
    const companies = await Company.findAll();
    return res.json(companies);
  });

  app.post("/companies", async (req, res, next) => {
    try {
      const submittedCompany = {
        logo: req.body.logo,
        name: req.body.name,
        aboutDescription: req.body.aboutDescription,
        city: req.body.city,
        state: req.body.state,
      };

      paramsValidator(submittedCompany);

      const newCompany = await Company.create(submittedCompany);

      return res.json(newCompany);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutesCompanies;
