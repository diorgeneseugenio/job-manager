import React from "react";
import { truncate } from "lodash";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { Job } from "../../../types";

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    display: "flex",
    flexDirection: "column",
    minHeight: "300px",
    maxHeight: "300px",
  },
  cardActions: {
    marginTop: "auto",
  },
}));

interface OwnProps {
  job: Job;
}

const CardInfo = (props: OwnProps) => {
  const { job } = props;

  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      classes={{
        root: classes.card,
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {truncate(job.description, { length: 250 })}
        </Typography>
      </CardContent>
      <CardActions
        classes={{
          root: classes.cardActions,
        }}
      >
        <Button variant="outlined">Ver Vagas</Button>
      </CardActions>
    </Card>
  );
};

export default CardInfo;
