import { isEmpty } from "lodash";

import { Job } from "#root/db/models/Job";
import { paramsValidator, filterValues } from "./utils";

const setupRoutesJobs = (app) => {
  app.get("/jobs", async (req, res, next) => {
    const jobs = await Job.findAll({ include: ["company"] });
    return res.json(jobs);
  });

  app.post("/jobs", async (req, res, next) => {
    try {
      const submittedJob = {
        companyId: req.body.companyId,
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        benefits: req.body.benefits,
        skills: req.body.skills,
        allowRemote: req.body.allowRemote,
        ended: false,
      };

      paramsValidator(submittedJob);

      const newJob = await Job.create(submittedJob);

      return res.json(newJob);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/jobs/:id", async (req, res, next) => {
    try {
      const jobs = await Job.findByPk(req.params.id, { include: ["company"] });

      if (!jobs) return next(new Error("Vaga não encontrada"));

      return res.json(jobs);
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/jobs/:id", async (req, res, next) => {
    try {
      const job = await Job.destroy({ where: { id: req.params.id } });

      if (!job) next(new Error("Vaga não encontrada"));

      return res.sendStatus(204);
    } catch (e) {
      return next(e);
    }
  });

  app.put("/jobs/:id", async (req, res, next) => {
    try {
      let newData = filterValues(req.body);

      const job = await Job.update(newData, {
        where: { id: req.params.id },
      });

      if (!job) return next(new Error("Vaga não encontrada"));

      return res.sendStatus(204);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/jobs/filterByCompany/:companyId", async (req, res, next) => {
    try {
      const jobs = await Job.findAll({
        where: { companyId: req.params.companyId },
        order: ["updatedAt", "title"],
        include: ["company"],
      });

      if (!jobs)
        return next(new Error("Nenhuma vaga encontrada para esta empresa"));

      return res.json(jobs);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutesJobs;
