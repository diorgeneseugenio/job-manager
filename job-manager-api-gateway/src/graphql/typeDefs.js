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
  }

  type Query {
    companies: [Company!]!
  }
`;

export default typeDefs;
