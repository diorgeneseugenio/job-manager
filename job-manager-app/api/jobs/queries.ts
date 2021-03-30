import { gql } from "@apollo/client";

export const FETCH_JOBS = gql`
  {
    fetchAllJobs {
      id
      companyId
      title
      description
      salary
      benefits
      skills
      allowRemote
      ended
      company {
        name
        state
        city
      }
      createdAt
      updatedAt
    }
  }
`;
