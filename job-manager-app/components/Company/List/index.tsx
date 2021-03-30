import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Breadcrumbs,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { Company } from "../../../types/company";
import CardInfo from "./CardInfo";

const useStyles = makeStyles(({ spacing }) => ({
  rowActions: {
    marginBottom: spacing(2),
  },
  buttonAdd: {
    float: "right",
  },
}));

const FETCH_COMPANIES = gql`
  {
    fetchAllCompanies {
      name
      aboutDescription
      state
      city
    }
  }
`;

const CompanyList = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(FETCH_COMPANIES);

  let companies: Company[] = [];
  if (data) {
    companies = data.fetchAllCompanies;
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={4}
        className={classes.rowActions}
      >
        <Grid item sm={12} md={6}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Typography color="textSecondary">Empresas</Typography>
            <Typography color="textPrimary">Listagem</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item sm={12} md={6}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className={classes.buttonAdd}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {companies.map((company) => (
          <Grid item sm={12} md={4}>
            <CardInfo company={company} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default CompanyList;
