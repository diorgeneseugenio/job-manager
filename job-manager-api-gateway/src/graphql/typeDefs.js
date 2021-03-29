import { gql } from "apollo-server";

const typeDefs = gql`
  type Company {
    id: ID!
    logo: String
    name: String!
    aboutDescription: String!
    city: String!
    state: String!
    jobs: [Job]
  }

  type Job {
    id: ID!
    companyId: ID
    title: String!
    description: String!
    salary: Float!
    benefits: String
    skills: String
    allowRemote: Boolean!
    ended: Boolean!
  }

  type Mutation {
    createCompany(
      logo: String
      name: String!
      aboutDescription: String!
      city: String!
      state: String!
    ): Company!

    updateCompany(
      id: ID!
      logo: String
      name: String
      aboutDescription: String
      city: String
      state: String
    ): Boolean!

    deleteCompany(id: ID!): Boolean!
  }

  type Query {
    fetchAllCompanies: [Company]
    fetchCompany(id: ID!): Company
  }
`;

export default typeDefs;
