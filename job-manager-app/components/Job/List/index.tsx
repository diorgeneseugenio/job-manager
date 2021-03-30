import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Grid, Typography } from "@material-ui/core";

import { Job, Company } from "../../../types";
import { FETCH_COMPANIES } from "../../../api/companies/queries";
import { FETCH_JOBS, FILTER_BY_COMPANY } from "../../../api/jobs/queries";
import Header from "../../Utils/Header";
import CardInfo from "./CardInfo";
import FilterCompanies from "./FilterCompanies";

const JobList = () => {
  const [companyIdSelected, setCompanyIdSelected] = useState(0);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState(false);

  const fetchJobsReturn = useQuery(FETCH_JOBS);
  const fetchCompaniesReturn = useQuery(FETCH_COMPANIES);
  const filterByCompanyReturn = useQuery(FILTER_BY_COMPANY, {
    variables: { companyId: companyIdSelected },
  });

  const router = useRouter();

  const onAdd = () => {
    router.push("/vagas/criar");
  };

  React.useEffect(() => {
    setError(false);
    if (fetchCompaniesReturn.data) {
      setCompanies(fetchCompaniesReturn.data.fetchAllCompanies);
    } else if (fetchCompaniesReturn.error) {
      setError(true);
    }
  }, [fetchCompaniesReturn]);

  React.useEffect(() => {
    setError(false);
    if (companyIdSelected === 0) {
      if (fetchJobsReturn.data) {
        setJobs(fetchJobsReturn.data.fetchAllJobs);
      } else if (fetchJobsReturn.error) {
        setError(true);
      }
    }
  }, [companyIdSelected, fetchJobsReturn]);

  React.useEffect(() => {
    if (companyIdSelected > 0) {
      if (filterByCompanyReturn.data) {
        setJobs(filterByCompanyReturn.data.filterByCompany);
      } else {
        setError(true);
      }
    }
  }, [companyIdSelected, filterByCompanyReturn]);

  return (
    <React.Fragment>
      <Header onAdd={onAdd} hasAddButton paths={["Vagas", "Listagem"]} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <FilterCompanies
          companies={companies}
          companyIdSelected={companyIdSelected}
          setCompanyIdSelected={setCompanyIdSelected}
        />
        {error && (
          <Grid item md={12}>
            <Typography color="secondary">
              Não foi possível carregar as vagas
            </Typography>
          </Grid>
        )}
        {jobs.map((job, index) => (
          <Grid item sm={12} md={3} key={index}>
            <CardInfo job={job} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default JobList;
