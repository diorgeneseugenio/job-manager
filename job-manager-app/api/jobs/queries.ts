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

export const FILTER_BY_COMPANY = gql`
  query FilterByCompany($companyId: ID!) {
    filterByCompany(companyId: $companyId) {
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
