import React, { MouseEvent, useState } from "react";
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
import Router from "next/router";
import { useMutation } from "@apollo/client";

import { Job } from "../../../types";
import { FETCH_JOBS } from "../../../api/jobs/queries";
import { DELETE_JOB } from "../../../api/jobs/mutations";
import ConfirmationDialog from "./ConfirmationDialog";

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

  const [openConfirmation, setOpenConfirmation] = useState(false);

  const [deleteJob] = useMutation(DELETE_JOB, {
    refetchQueries: [{ query: FETCH_JOBS }],
    variables: { id: job.id },
  });

  const openConfirmationDelete = (event: MouseEvent) => {
    event.stopPropagation();
    setOpenConfirmation(true);
  };

  const onDelete = () => {
    deleteJob().then(() => setOpenConfirmation(false));
  };

  const onEdit = (event: MouseEvent) => {
    event.stopPropagation();
    Router.push(`/vagas/editar/${job.id}`);
  };

  return (
    <React.Fragment>
      <Card
        variant="outlined"
        classes={{
          root: classes.card,
        }}
        onClick={() => Router.push(`/vagas/detalhar/${job.id}`)}
        data-testid="card-job"
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
          <Button variant="outlined" onClick={onEdit} data-testid="btn-edit">
            Editar
          </Button>
          <Button color="secondary" onClick={openConfirmationDelete}>
            Deletar
          </Button>
        </CardActions>
      </Card>
      <ConfirmationDialog
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        jobTitle={job.title}
        callbackAccept={onDelete}
      />
    </React.Fragment>
  );
};

export default CardInfo;
