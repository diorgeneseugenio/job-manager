import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { isEmpty } from "lodash";
import Router, { useRouter } from "next/router";

import Header from "../../Utils/Header";
import FormFields from "./FormFields";
import { Job, Company } from "../../../types";
import { FETCH_COMPANIES } from "../../../api/companies/queries";
import { FETCH_JOB, FETCH_JOBS } from "../../../api/jobs/queries";
import { UPDATE_JOB } from "../../../api/jobs/mutations";

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
  const [job, setJob] = useState<Job>(defaultJob);
  const [errorMessage, setErrorMessage] = useState("");

  const { data } = useQuery(FETCH_COMPANIES);

  const router = useRouter();

  let companies: Company[] = [];
  if (data) {
    companies = data.fetchAllCompanies;
  }
  const fetchJobReturn = useQuery(FETCH_JOB, {
    variables: { id: Router.query.id },
  });

  const [updateJob] = useMutation(UPDATE_JOB, {
    refetchQueries: [{ query: FETCH_JOBS }],
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!(job.companyId > 0))
        throw new Error("É necessário selecionar uma empresa");

      updateJob({
        variables: {
          id: job.id,
          companyId: job.companyId,
          title: job.title,
          description: job.description,
          salary: job.salary,
          benefits: job.benefits,
          skills: job.skills,
          allowRemote: job.allowRemote,
          ended: job.ended,
        },
      }).then(() => router.push("/vagas"));
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  React.useEffect(() => {
    if (job.id === 0) {
      if (fetchJobReturn) {
        if (fetchJobReturn.data) {
          setJob(fetchJobReturn.data.fetchJob);
        }
      }
    }
  }, [job, fetchJobReturn]);

  const setParameter = (value: string | boolean, name: string) => {
    setJob({ ...job, [name]: value });
  };

  return (
    <React.Fragment>
      <Header paths={["Vagas", "Editar", job.title]} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={6} xs={12}>
          <Box mb={4}>
            <Button variant="outlined" onClick={() => router.push("/vagas")}>
              Voltar
            </Button>
          </Box>
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
                Alterar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default JobCreate;
