import { NoSsr } from "@material-ui/core";

import Layout from "../components/Layout";
import Home from "../components/Home";

const Page = () => {
  return (
    <NoSsr>
      <Layout>
        <Home />
      </Layout>
    </NoSsr>
  );
};

export default Page;
