import React, { useState } from "react";
import {
  Divider,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { isEmpty } from "lodash";

import { Job, Company } from "../../../types";

const useStyles = makeStyles(({ spacing }) => ({
  fieldsRow: {
    marginBottom: spacing(2),
  },
  biggerFieldsRow: {
    marginBottom: spacing(5),
  },
}));

interface OwnProps {
  job: Job;
  companies: Company[];
  setParameter(value: string | boolean, name: string): void;
}

const FormFields = (props: OwnProps) => {
  const { job, companies, setParameter } = props;

  const [benefitsMock, setBenefitsMock] = useState<string[]>();
  const [skillsMock, setSkillsMock] = useState<string[]>();

  const classes = useStyles();

  const onAddBenefits = (benefit: string) => {
    const newBenefits = [...benefitsMock, benefit];
    setBenefitsMock(newBenefits);
    setParameter(newBenefits.join(";"), "benefits");
  };

  const onDeleteBenefits = (benefitToBeRemoved: string) => {
    const newBenefits = benefitsMock.filter(
      (benefit) => !(benefitToBeRemoved === benefit)
    );
    setBenefitsMock(newBenefits);
    setParameter(newBenefits.join(";"), "benefits");
  };

  const onAddSkills = (skill: string) => {
    const newSkills = [...skillsMock, skill];
    setSkillsMock(newSkills);
    setParameter(newSkills.join(";"), "skills");
  };

  const onDeleteSkills = (skillToBeRemoved: string) => {
    const newSkills = skillsMock.filter(
      (skill) => !(skillToBeRemoved === skill)
    );
    setSkillsMock(newSkills);
    setParameter(newSkills.join(";"), "skills");
  };

  React.useEffect(() => {
    setBenefitsMock(!isEmpty(job.benefits) ? job.benefits.split(";") : []);
    setSkillsMock(!isEmpty(job.skills) ? job.skills.split(";") : []);
  }, [job]);

  return (
    <React.Fragment>
      <div className={classes.fieldsRow}>
        <TextField
          id="companyId"
          label="Empresa"
          value={job.companyId}
          select
          onChange={(event) => setParameter(event.target.value, "companyId")}
          variant="outlined"
          required
          fullWidth
        >
          <MenuItem value="0">Selecione a empresa</MenuItem>
          {companies.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={classes.fieldsRow}>
        <TextField
          id="title"
          label="Título"
          type="text"
          value={job.title}
          onChange={(event) => setParameter(event.target.value, "title")}
          variant="outlined"
          required
          fullWidth
        />
      </div>
      <div className={classes.fieldsRow}>
        <TextField
          id="description"
          label="Descrição"
          type="text"
          value={job.description}
          onChange={(event) => setParameter(event.target.value, "description")}
          variant="outlined"
          multiline
          rows={8}
          required
          fullWidth
        />
      </div>
      <Divider className={classes.fieldsRow} />
      <div className={classes.fieldsRow}>
        <FormControlLabel
          control={
            <Switch
              checked={job.allowRemote}
              onChange={(event) =>
                setParameter(event.target.checked, "allowRemote")
              }
              name="allowRemote"
              color="primary"
            />
          }
          label="Aceita trabalho remoto?"
        />
      </div>
      <div className={classes.biggerFieldsRow}>
        <ChipInput
          label="Benefícios"
          value={benefitsMock}
          onAdd={(benefit) => onAddBenefits(benefit)}
          onDelete={(benefit) => onDeleteBenefits(benefit)}
          variant="outlined"
          fullWidth
          helperText={
            <Typography variant="caption">
              Para adicionar um benefícion aperte enter
            </Typography>
          }
        />
      </div>
      <div className={classes.biggerFieldsRow}>
        <ChipInput
          label="Requisitos"
          value={skillsMock}
          onAdd={(skill) => onAddSkills(skill)}
          onDelete={(skill) => onDeleteSkills(skill)}
          variant="outlined"
          fullWidth
          helperText={
            <Typography variant="caption">
              Para adicionar um requisito aperte enter
            </Typography>
          }
        />
      </div>
      <div className={classes.fieldsRow}>
        <CurrencyTextField
          label="Salário"
          variant="outlined"
          value={job.salary}
          currencySymbol="R$"
          outputFormat="string"
          decimalCharacter="."
          digitGroupSeparator=","
          onChange={(_event, value) => setParameter(value, "salary")}
          required
          fullWidth
        />
      </div>
    </React.Fragment>
  );
};

export default FormFields;
