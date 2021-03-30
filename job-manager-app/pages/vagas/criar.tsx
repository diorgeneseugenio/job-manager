import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../../components/Layout";
import JobCreate from "../../components/Job/Create";
import graphqlClient from "../../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <JobCreate />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

Page.Layout = Layout;
export default Page;
