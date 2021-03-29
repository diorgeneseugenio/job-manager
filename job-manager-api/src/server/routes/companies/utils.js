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

export const filterValues = (company) => {
  let newData = {};

  if (!isEmpty(company.name)) newData["name"] = company.name;
  if (!isEmpty(company.logo)) newData["logo"] = company.logo;
  if (!isEmpty(company.aboutDescription))
    newData["aboutDescription"] = company.aboutDescription;
  if (!isEmpty(company.state)) newData["state"] = company.state;
  if (!isEmpty(company.city)) newData["city"] = company.city;

  return newData;
};
