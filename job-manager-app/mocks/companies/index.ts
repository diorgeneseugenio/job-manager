import { FETCH_COMPANIES } from "../../api/companies/queries";

export const mockFetchCompanies = {
  request: {
    query: FETCH_COMPANIES,
  },
  result: {
    data: {
      fetchAllCompanies: [
        {
          id: 1,
          name: "Nkey",
          aboutDescription: "Transformando tecnologias.",
          state: "SC",
          city: "Florianópolis",
        },
      ],
    },
  },
};

export const mockCompanies = [
  {
    id: 1,
    name: "Nkey",
    aboutDescription: "Transformando tecnologias.",
    state: "SC",
    city: "Florianópolis",
  },
  {
    id: 2,
    name: "Fluid API",
    aboutDescription: "Transformando integrações.",
    state: "SC",
    city: "Florianópolis",
  },
];
