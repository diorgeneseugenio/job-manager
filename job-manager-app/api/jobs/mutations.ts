import { gql } from "@apollo/client";

export const CREATE_JOB = gql`
  mutation CreateJob(
    $companyId: ID!
    $title: String!
    $description: String!
    $salary: String!
    $benefits: String
    $skills: String
    $allowRemote: Boolean!
  ) {
    createJob(
      companyId: $companyId
      title: $title
      description: $description
      salary: $salary
      benefits: $benefits
      skills: $skills
      allowRemote: $allowRemote
    ) {
      id
      title
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
