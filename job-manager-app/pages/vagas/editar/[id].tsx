import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../../../components/Layout";
import JobUpdate from "../../../components/Job/Update";
import graphqlClient from "../../../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <JobUpdate />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

export default Page;
