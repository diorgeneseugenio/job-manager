import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar = (props: Props) => {
  const { setOpen } = props;

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Sistemas de Gerenciamento de Vagas
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
