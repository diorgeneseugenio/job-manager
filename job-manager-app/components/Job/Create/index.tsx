import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { isEmpty } from "lodash";

import Header from "../../Utils/Header";
import FormFields from "./FormFields";
import { Job, Company } from "../../../types";
import { FETCH_COMPANIES } from "../../../api/companies/queries";
import { FETCH_JOBS } from "../../../api/jobs/queries";
import { CREATE_JOB } from "../../../api/jobs/mutations";
import { useRouter } from "next/router";

const useStyles = makeStyles(({ spacing }) => ({
  fieldsRow: {
    marginBottom: spacing(2),
  },
}));

const defaultJob: Job = {
  id: 0,
  companyId: 0,
  title: "",
  description: "",
  salary: 0,
  benefits: "",
  skills: "",
  allowRemote: false,
  ended: false,
  company: null,
  createdAt: "",
  updatedAt: "",
};

const JobCreate = () => {
  const classes = useStyles();

  const [job, setJob] = useState<Job>(defaultJob);
  const [errorMessage, setErrorMessage] = useState("");

  const { loading, error, data } = useQuery(FETCH_COMPANIES);

  const router = useRouter();

  let companies: Company[] = [];
  if (data) {
    companies = data.fetchAllCompanies;
  }
  const [createJob] = useMutation(CREATE_JOB, {
    refetchQueries: [{ query: FETCH_JOBS }],
  });

  const setParameter = (value: string | boolean, name: string) => {
    setJob({ ...job, [name]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!(job.companyId > 0))
        throw new Error("É necessário selecionar uma empresa");

      createJob({
        variables: {
          companyId: job.companyId,
          title: job.title,
          description: job.description,
          salary: job.salary,
          benefits: job.benefits,
          skills: job.skills,
          allowRemote: job.allowRemote,
        },
      }).then(() => router.push("/vagas"));
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <React.Fragment>
      <Header paths={["Vagas", "Cadastrar"]} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={6} xs={12}>
          <form onSubmit={onSubmit}>
            <FormFields
              job={job}
              companies={companies}
              setParameter={setParameter}
            />
            {!isEmpty(errorMessage) && (
              <Typography variant="caption" color="secondary">
                {errorMessage}
              </Typography>
            )}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Criar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default JobCreate;
