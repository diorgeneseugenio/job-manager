import { isEmpty } from "lodash";

export const paramsValidator = (job) => {
  if (!job.companyId > 0)
    throw new Error("A vaga precisa ter uma empresa vinculada");
  if (isEmpty(job.title)) throw new Error("A vaga precisa ter um título ");
  if (isEmpty(job.description))
    throw new Error("A vaga precisa ter uma descrição");
  if (isEmpty(job.salary)) throw new Error("A vaga precisa ter um salário");
  if (!"allowRemote" in job)
    throw new Error(
      "A vaga precisa ter uma definição se aceita trabalho remoto"
    );
  if (!"ended" in job)
    throw new Error("A vaga precisa ter um uma definição se está encerrada");
};

export const filterValues = (job) => {
  let newData = {};

  if (job.companyId > 0) newData["companyId"] = job.companyId;
  if (!isEmpty(job.title)) newData["title"] = job.title;
  if (!isEmpty(job.description)) newData["description"] = job.description;
  if (!isEmpty(job.salary)) newData["salary"] = job.salary;
  if (!isEmpty(job.benefits)) newData["benefits"] = job.benefits;
  if (!isEmpty(job.skills)) newData["skills"] = job.skills;
  if ("allowRemote" in job) newData["allowRemote"] = job.allowRemote;
  if ("ended" in job) newData["ended"] = job.ended;

  return newData;
};
