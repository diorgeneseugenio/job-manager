import React from "react";
import { Grid, makeStyles, MenuItem, TextField } from "@material-ui/core";

import { Company } from "../../../types";

const useStyles = makeStyles(({ spacing }) => ({
  rowFilter: {
    marginBottom: spacing(2),
  },
}));

interface OwnProps {
  companies: Company[];
  companyIdSelected: number;
  setCompanyIdSelected: React.Dispatch<React.SetStateAction<number>>;
}

const FilterCompanies = (props: OwnProps) => {
  const { companies, companyIdSelected, setCompanyIdSelected } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={4}
      className={classes.rowFilter}
    >
      <Grid item md={4}>
        <TextField
          id="companyId"
          label="Filtro por empresa"
          value={companyIdSelected}
          select
          onChange={(event) =>
            setCompanyIdSelected(parseInt(event.target.value))
          }
          variant="outlined"
          required
          fullWidth
        >
          <MenuItem value="0">Selecione uma empresa</MenuItem>
          {companies.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default FilterCompanies;
