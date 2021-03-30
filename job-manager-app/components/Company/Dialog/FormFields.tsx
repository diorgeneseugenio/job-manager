import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

import { Company } from "../../../types/company";

const useStyles = makeStyles(({ spacing }) => ({
  fieldsRow: {
    marginBottom: spacing(2),
  },
}));

interface OwnProps {
  company: Company;
  setParameter(value: string, name: string): void;
}

const FormFields = (props: OwnProps) => {
  const { company, setParameter } = props;

  const classes = useStyles();

  return (
    <div>
      <div className={classes.fieldsRow}>
        <TextField
          id="name"
          label="Nome"
          type="text"
          value={company.name}
          onChange={(event) => setParameter(event.target.value, "name")}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={classes.fieldsRow}>
        <TextField
          id="aboutDescription"
          label="Descrição"
          type="text"
          value={company.aboutDescription}
          onChange={(event) =>
            setParameter(event.target.value, "aboutDescription")
          }
          variant="outlined"
          multiline
          rows={5}
          fullWidth
        />
      </div>
      <div className={classes.fieldsRow}>
        <TextField
          id="state"
          label="Estado"
          type="text"
          value={company.state}
          onChange={(event) => setParameter(event.target.value, "state")}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={classes.fieldsRow}>
        <TextField
          id="city"
          label="Cidade"
          type="text"
          value={company.city}
          onChange={(event) => setParameter(event.target.value, "city")}
          variant="outlined"
          fullWidth
        />
      </div>
    </div>
  );
};

export default FormFields;
