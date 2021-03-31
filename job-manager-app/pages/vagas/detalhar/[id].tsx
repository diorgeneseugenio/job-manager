import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../../../components/Layout";
import JobDetail from "../../../components/Job/Detail";
import graphqlClient from "../../../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <JobDetail />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

export default Page;
