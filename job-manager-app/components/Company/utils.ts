import { isEmpty } from "lodash";

import { Company } from "../../types/company";

export const validateFormData = (
  company: Company,
  mode: "create" | "update"
): boolean => {
  if (mode === "update" && !(company.id > 0))
    throw new Error("O campo ID precisa estar preenchido!");
  if (isEmpty(company.name)) throw new Error("A empresa precisa ter um nome!");
  if (isEmpty(company.aboutDescription))
    throw new Error("A empresa precisa ter uma descrição!");
  if (isEmpty(company.state))
    throw new Error("A empresa precisa ter um estado!");
  if (isEmpty(company.city))
    throw new Error("A empresa precisa ter uma cidade!");

  return true;
};
