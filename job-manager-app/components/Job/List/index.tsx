import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Grid, Typography } from "@material-ui/core";

import { Job } from "../../../types/job";
import { FETCH_JOBS } from "../../../api/jobs/queries";
import Header from "../../Utils/Header";
import CardInfo from "./CardInfo";

const JobList = () => {
  const { loading, error, data } = useQuery(FETCH_JOBS);

  const router = useRouter();

  let jobs: Job[] = [];
  if (data) {
    jobs = data.fetchAllJobs;
  }

  const onAdd = () => {
    router.push("/vagas/criar");
  };

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
        {error && (
          <Typography color="secondary">
            Não foi possível carregar as vagas
          </Typography>
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
