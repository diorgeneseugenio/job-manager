import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

interface OwnProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jobTitle: string;
  callbackAccept(): void;
}

const ConfirmationDialog = (props: OwnProps) => {
  const { open, setOpen, jobTitle, callbackAccept } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deseja excluir a vaga {jobTitle}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Não
        </Button>
        <Button onClick={callbackAccept} color="primary" autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
