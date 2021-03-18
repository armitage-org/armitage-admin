import * as React from "react";
import { Layout as RaLayout } from "react-admin";

import AppBar from "./AppBar";

const Layout = (props) => <RaLayout {...props} appBar={AppBar} />;

export default Layout;
