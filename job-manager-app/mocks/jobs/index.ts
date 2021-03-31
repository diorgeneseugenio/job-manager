import { FETCH_JOBS } from "../../api/jobs/queries";
import { Job } from "../../types/job";

export const mockFetchJobs = {
  request: {
    query: FETCH_JOBS,
  },
  result: {
    data: {
      fetchAllJobs: [
        {
          id: 1,
          companyId: 1,
          title: "Dev",
          description: "Job",
          benefits: "VT;VR",
          skills: "React;Node",
          salary: "2000",
          allowRemote: true,
          ended: false,
          company: {
            name: "Nkey",
            state: "SC",
            city: "Florianópolis",
          },
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
  },
};

export const mockFetchJobsWithError = {
  request: {
    query: FETCH_JOBS,
  },
  error: new Error("Problem to fetch data"),
};

export const mockJob: Job = {
  id: 1,
  companyId: 1,
  title: "Dev",
  description: "Job",
  benefits: "VT;VR",
  skills: "React;Node",
  salary: 2000,
  allowRemote: true,
  ended: false,
  company: {
    id: 1,
    name: "Nkey",
    aboutDescription: "Transformando ideias",
    state: "SC",
    city: "Florianópolis",
  },
  createdAt: "",
  updatedAt: "",
};
