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
    createdAt: String
    updatedAt: String
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
    company: Company
    createdAt: String
    updatedAt: String
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

    createJob(
      companyId: ID!
      title: String!
      description: String!
      salary: String!
      benefits: String
      skills: String
      allowRemote: Boolean!
    ): Job!

    updateJob(
      id: ID!
      companyId: ID
      title: String
      description: String
      salary: Float
      benefits: String
      skills: String
      allowRemote: Boolean
      ended: Boolean
    ): Boolean!

    deleteJob(id: ID!): Boolean!
  }

  type Query {
    fetchAllCompanies: [Company]
    fetchCompany(id: ID!): Company
    fetchAllJobs: [Job]
    fetchJob(id: ID!): Job
  }
`;

export default typeDefs;
