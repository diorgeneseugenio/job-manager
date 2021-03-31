import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../../components/Layout";
import JobList from "../../components/Job/List";
import graphqlClient from "../../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <JobList />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

export default Page;
