import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { isEmpty } from "lodash";

import { Company } from "../../../types";
import FormFields from "./FormFields";
import {
  CREATE_COMPANY,
  UPDATE_COMPANY,
} from "../../../api/companies/mutations";
import { FETCH_COMPANIES } from "../../../api/companies/queries";
import { validateFormData } from "../utils";

interface OwnProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "create" | "update";
  loadedCompany?: Company;
}

const defaultCompany = {
  id: 0,
  name: "",
  aboutDescription: "",
  state: "",
  city: "",
};

export default function FormDialog(props: OwnProps) {
  const { open, setOpen, mode, loadedCompany = defaultCompany } = props;

  const [company, setCompany] = useState<Company>(loadedCompany);
  const [errorMessage, setErrorMessage] = useState("");

  const [createCompany] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: FETCH_COMPANIES }],
  });
  const [updateCompany] = useMutation(UPDATE_COMPANY, {
    refetchQueries: [{ query: FETCH_COMPANIES }],
  });

  React.useEffect(() => {
    setCompany(loadedCompany);
  }, [loadedCompany]);

  const setParameter = (value: string, name: string) => {
    setCompany({ ...company, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    try {
      validateFormData(company, mode);
      if (mode === "create") {
        createCompany({
          variables: {
            name: company.name,
            aboutDescription: company.aboutDescription,
            state: company.state,
            city: company.city,
          },
        });
      } else {
        delete company["__typename"];
        updateCompany({
          variables: {
            id: company.id,
            name: company.name,
            aboutDescription: company.aboutDescription,
            state: company.state,
            city: company.city,
          },
        });
      }
      setCompany(defaultCompany);
      setOpen(false);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {mode === "create" ? "Criação" : "Edição"} de Empresa
      </DialogTitle>
      <DialogContent>
        <FormFields company={company} setParameter={setParameter} />
        {!isEmpty(errorMessage) && (
          <Typography variant="caption" color="secondary">
            {errorMessage}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onSubmit} color="primary">
          {mode === "create" ? "Criar" : "Atualizar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
