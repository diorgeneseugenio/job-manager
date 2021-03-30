import React from "react";
import { truncate, isEmpty } from "lodash";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { Job } from "../../../types";

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    maxHeight: "400px",
    "&:hover, &:focus": {
      boxShadow: "0px 0px 6px 0px rgb(0 62 208 / 50%)",
      cursor: "pointer",
    },
  },
  company: {
    marginBottom: spacing(2),
  },
  optionalFields: {
    marginTop: spacing(3),
  },
  benefits: {
    marginLeft: spacing(0.5),
    marginRight: spacing(0.5),
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
        <Typography variant="h5">{job.title}</Typography>
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
        {(!isEmpty(job.benefits) || !isEmpty(job.skills)) && (
          <div className={classes.optionalFields}>
            <Typography variant="caption" display="block" gutterBottom>
              Benefícios:
              {!isEmpty(job.benefits) &&
                job.benefits
                  .split(";")
                  .map((benefit) => (
                    <Chip
                      className={classes.benefits}
                      label={benefit}
                      size="small"
                    />
                  ))}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Requisitos:
              {!isEmpty(job.skills) &&
                job.skills
                  .split(";")
                  .map((skill) => (
                    <Chip
                      className={classes.benefits}
                      label={skill}
                      size="small"
                    />
                  ))}
            </Typography>
          </div>
        )}
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
