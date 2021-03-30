import { ApolloProvider } from "@apollo/client";
import { NoSsr } from "@material-ui/core";

import Layout from "../components/Layout";
import CompanyList from "../components/Company/List";
import graphqlClient from "../api/graphqlClient";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <ApolloProvider client={graphqlClient}>
          <CompanyList />
        </ApolloProvider>
      </Layout>
    </NoSsr>
  );
};

export default Page;
