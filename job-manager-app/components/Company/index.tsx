import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@material-ui/core";

import { Company } from "../../types/company";
import CardInfo from "./CardInfo";
import Header from "./Header";
import Dialog from "./Dialog/";

import { FETCH_COMPANIES } from "../../api/companies/queries";

const CompanyList = () => {
  const { loading, error, data } = useQuery(FETCH_COMPANIES);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [dialogMode, setDialogMode] = React.useState<"create" | "update">(
    "create"
  );
  const [companyToUpdate, setCompanyToUpdate] = React.useState<Company>(null);

  let companies: Company[] = [];
  if (data) {
    companies = data.fetchAllCompanies;
  }

  const onAdd = () => {
    setDialogMode("create");
    setIsDialogOpen(true);
  };

  const onUpdate = () => {
    setDialogMode("update");
    setIsDialogOpen(true);
  };

  return (
    <React.Fragment>
      <Header onAdd={onAdd} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {error && (
          <Typography color="secondary">
            Não foi possível carregar as empresas
          </Typography>
        )}
        {companies.map((company, index) => (
          <Grid item sm={12} md={4} key={index}>
            <CardInfo
              company={company}
              setCompanyToUpdate={setCompanyToUpdate}
              onUpdate={onUpdate}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        mode={dialogMode}
        loadedCompany={dialogMode === "update" ? companyToUpdate : undefined}
      />
    </React.Fragment>
  );
};

export default CompanyList;
