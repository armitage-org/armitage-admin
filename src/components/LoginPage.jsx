import * as React from "react";
import { useLogin, useNotify } from "react-admin";
import GoogleLogin from "react-google-login";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import config from "../config";

const useStyles = makeStyles({
  wrapper: {
    width: "100vw",
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundImage: 'url("https://source.unsplash.com/1600x900/?library")',
    backgroundSize: "cover",
  },
});

const LoginPage = ({ theme }) => {
  const login = useLogin();
  const notify = useNotify();
  const styles = useStyles();

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <div className={styles.wrapper}>
        <GoogleLogin
          clientId={config.oAuthClientId}
          buttonText="Login"
          onSuccess={login}
          onFailure={(error) => notify(`Failed to log in: ${error}`)}
          cookiePolicy={"single_host_origin"}
          uxMode="popup"
          hostedDomain="ackee.cz"
        />
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
