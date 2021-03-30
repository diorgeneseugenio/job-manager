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

import { Company } from "../../types/company";

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
  company: Company;
  setCompanyToUpdate: React.Dispatch<React.SetStateAction<Company>>;
  onUpdate(): void;
}

const CardInfo = (props: OwnProps) => {
  const { company, setCompanyToUpdate, onUpdate } = props;

  const classes = useStyles();

  const updateHandler = async () => {
    await setCompanyToUpdate(company);
    onUpdate();
  };

  return (
    <Card
      variant="outlined"
      classes={{
        root: classes.card,
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {truncate(company.aboutDescription, { length: 250 })}
        </Typography>
        <Typography variant="caption" color="textSecondary" gutterBottom>
          {company.state} - {company.city}
        </Typography>
      </CardContent>
      <CardActions
        classes={{
          root: classes.cardActions,
        }}
      >
        <Button variant="outlined" color="primary" onClick={updateHandler}>
          Editar
        </Button>
        <Button variant="outlined">Ver Vagas</Button>
      </CardActions>
    </Card>
  );
};

export default CardInfo;
