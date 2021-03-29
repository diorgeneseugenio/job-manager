import { Company } from "#root/db/models/Company";
import { paramsValidator, filterValues } from "./utils";

const setupRoutesCompanies = (app) => {
  app.get("/companies", async (req, res, next) => {
    const companies = await Company.findAll({
      include: ["jobs"],
    });
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

  app.get("/companies/:id", async (req, res, next) => {
    try {
      const companies = await Company.findByPk(req.params.id, {
        include: ["jobs"],
      });

      if (!companies) return next(new Error("Empresa não encontrada"));

      return res.json(companies);
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/companies/:id", async (req, res, next) => {
    try {
      const company = await Company.destroy({ where: { id: req.params.id } });

      if (!company) next(new Error("Empresa não encontrada"));

      return res.sendStatus(204);
    } catch (e) {
      return next(e);
    }
  });

  app.put("/companies/:id", async (req, res, next) => {
    try {
      let newData = filterValues(req.body);

      const company = await Company.update(newData, {
        where: { id: req.params.id },
      });

      if (!company) return next(new Error("Empresa não encontrada"));

      return res.sendStatus(204);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutesCompanies;
