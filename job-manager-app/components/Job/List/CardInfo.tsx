import React from "react";
import { truncate } from "lodash";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";

import { Job } from "../../../types";

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    display: "flex",
    flexDirection: "column",
    minHeight: "300px",
    maxHeight: "300px",
    "&:hover, &:focus": {
      boxShadow: "0px 0px 6px 0px rgb(0 62 208 / 50%)",
      cursor: "pointer",
    },
  },
  company: {
    marginBottom: spacing(2),
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
        <Typography variant="h5">
          {job.title}{" "}
          {job.allowRemote && (
            <Tooltip title="Aceita remoto" placement="right">
              <ComputerIcon fontSize="small" color="action" />
            </Tooltip>
          )}
        </Typography>
        <Typography
          className={classes.company}
          variant="caption"
          display="block"
          gutterBottom
        >
          {job.company.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {truncate(job.description, { length: 280 })}
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
