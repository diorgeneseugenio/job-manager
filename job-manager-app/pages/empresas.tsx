import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../components/Layout";
import Company from "../components/Company";
import graphqlClient from "../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <Company />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

export default Page;
