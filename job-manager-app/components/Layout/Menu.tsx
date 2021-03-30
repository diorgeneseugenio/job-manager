import React from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles(() => ({
  fullList: {
    width: "15vw",
  },
}));

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = (props: Props) => {
  const { open, setOpen } = props;

  const classes = useStyles();

  const handlesClose = () => {
    setOpen(false);
  };

  return (
    <Drawer anchor="left" open={open} onClose={handlesClose}>
      <div
        className={classes.fullList}
        role="presentation"
        onClick={handlesClose}
        onKeyDown={handlesClose}
      >
        <List>
          <Link href="/empresas">
            <ListItem button key="Empresas">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Empresas" />
            </ListItem>
          </Link>
          <Link href="/vagas">
            <ListItem button key="Vagas">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Vagas" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
