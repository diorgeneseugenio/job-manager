import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Button, Chip, Grid, Typography } from "@material-ui/core";
import Router, { useRouter } from "next/router";
import { isEmpty } from "lodash";

import { Job } from "../../../types";
import { FETCH_JOB } from "../../../api/jobs/queries";
import Header from "../../Utils/Header";

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
  const [error, setError] = useState(false);

  const router = useRouter();

  const fetchJobReturn = useQuery(FETCH_JOB, {
    variables: { id: Router.query.id },
  });

  React.useEffect(() => {
    setError(false);
    if (job.id === 0) {
      if (fetchJobReturn) {
        if (fetchJobReturn.data) {
          setJob(fetchJobReturn.data.fetchJob);
        } else {
          setError(true);
        }
      }
    }
  }, [job, fetchJobReturn]);

  return (
    <React.Fragment>
      <Header paths={["Vagas", "Detalhar", job.title]} />
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
          {error && (
            <Typography color="secondary">
              Não foi possível carregas as informações desta vaga
            </Typography>
          )}
          {!error && (
            <React.Fragment>
              <Typography variant="h4">{job.title}</Typography>
              <Typography variant="caption">
                {job.company && job.company.name}
              </Typography>
              <Box mt={4}>
                <Typography variant="body1">{job.description}</Typography>
              </Box>
              {!isEmpty(job.benefits) && (
                <Box my={4} fontWeight="fontWeightMedium" display="block">
                  Benefícios:
                  {job.benefits.split(";").map((benefit, index) => (
                    <Box mx={0.5} display="inline" key={index}>
                      <Chip size="small" label={benefit} />
                    </Box>
                  ))}
                </Box>
              )}
              {!isEmpty(job.skills) && (
                <Box my={4} fontWeight="fontWeightMedium" display="block">
                  Requisitos:
                  {job.skills.split(";").map((skill, index) => (
                    <Box mx={0.5} display="inline" key={index}>
                      <Chip size="small" label={skill} />
                    </Box>
                  ))}
                </Box>
              )}
              <Box my={2} fontWeight="fontWeightMedium" display="block">
                Aceita remoto?{" "}
                <Typography variant="body1" display="inline">
                  {job.allowRemote ? "Sim" : "Não"}
                </Typography>
              </Box>
              <Box my={2} fontWeight="fontWeightMedium" display="block">
                Salário:{" "}
                <Typography variant="body1" display="inline">
                  R$ {job.salary}
                </Typography>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default JobCreate;
