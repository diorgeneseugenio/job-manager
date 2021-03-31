import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Router from "next/router";

const useStyles = makeStyles(() => ({
  content: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3} className={classes.content}>
          <Typography variant="h3">Bem vindo!</Typography>
          <Typography variant="h5" color="textSecondary">
            O que gostaria de acessar?
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => Router.push("/empresas")}
            >
              Empresas{" "}
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => Router.push("/vagas")}
            >
              Vagas{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
