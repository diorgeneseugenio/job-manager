import { gql } from "apollo-server";

const typeDefs = gql`
  type Company {
    logo: String
    name: String!
    aboutDescription: String!
    city: String!
    state: String!
    id: ID!
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
