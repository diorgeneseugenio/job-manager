import { gql } from "@apollo/client";

export const FETCH_COMPANIES = gql`
  {
    fetchAllCompanies {
      id
      name
      aboutDescription
      state
      city
    }
  }
`;
