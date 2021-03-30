import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
  mutation CreateCompany(
    $name: String!
    $aboutDescription: String!
    $state: String!
    $city: String!
  ) {
    createCompany(
      name: $name
      aboutDescription: $aboutDescription
      state: $state
      city: $city
    ) {
      id
      name
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany(
    $id: ID!
    $name: String
    $aboutDescription: String
    $state: String
    $city: String
  ) {
    updateCompany(
      id: $id
      name: $name
      aboutDescription: $aboutDescription
      state: $state
      city: $city
    )
  }
`;
