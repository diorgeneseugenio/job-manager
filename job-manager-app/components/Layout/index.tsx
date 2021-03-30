import React, { useState } from "react";

import TopBar from "./TopBar";
import Menu from "./Menu";
import { makeStyles } from "@material-ui/core";

export const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  content: {
    height: "100vw",
    padding: "8rem 4rem 0rem 4rem",
  },
}));

interface Props {
  children?: any;
}

const Layout = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <TopBar setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Layout;
