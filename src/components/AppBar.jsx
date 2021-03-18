import * as React from "react";
import { AppBar as RaAppBar } from "react-admin";

import { makeStyles } from "@material-ui/core/styles";

import Logo from "./Logo";

const useStyles = makeStyles({
  spacer: {
    flex: 1,
  },
});

const AppBar = (props) => {
  const classes = useStyles();
  return (
    <RaAppBar {...props}>
      <Logo />
      <span className={classes.spacer} />
    </RaAppBar>
  );
};

export default AppBar;
