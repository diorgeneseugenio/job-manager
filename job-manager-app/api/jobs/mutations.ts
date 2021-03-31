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

export const UPDATE_JOB = gql`
  mutation UpdateJob(
    $id: ID!
    $companyId: ID
    $title: String
    $description: String
    $salary: String
    $benefits: String
    $skills: String
    $allowRemote: Boolean
    $ended: Boolean
  ) {
    updateJob(
      id: $id
      companyId: $companyId
      title: $title
      description: $description
      salary: $salary
      benefits: $benefits
      skills: $skills
      allowRemote: $allowRemote
      ended: $ended
    )
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($id: ID!) {
    deleteJob(id: $id)
  }
`;
