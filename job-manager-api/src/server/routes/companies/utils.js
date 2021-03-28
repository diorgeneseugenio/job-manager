import { isEmpty } from "lodash";

export const paramsValidator = (company) => {
  if (isEmpty(company.name)) throw new Error("A empresa precisa ter um nome");
  if (isEmpty(company.aboutDescription))
    throw new Error(
      "A empresa precisa ter uma descrição sobre sua história e suas atividades"
    );
  if (isEmpty(company.state))
    throw new Error("A empresa precisa ter um estado");
  if (isEmpty(company.city))
    throw new Error("A empresa precisa ter uma cidade");
};
