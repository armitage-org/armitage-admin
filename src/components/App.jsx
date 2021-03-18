import * as React from "react";
import { Admin, Resource } from "react-admin";
import { restClient } from "ra-data-feathers";

import BookIcon from "@material-ui/icons/MenuBook";
import Person from "@material-ui/icons/Person";

import feathersClient from "../feathersClient";
import googleAuthProvider from "../googleAuthProvider";

import Layout from "./Layout";
import LoginPage from "./LoginPage";

import BooksList from "./BooksList";
import BookCreate from "./BookCreate";
import BookEdit from "./BookEdit";

import UserList from "./UsersList";

const dataProvider = restClient(feathersClient);

const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={googleAuthProvider}
    loginPage={LoginPage}
  >
    <Resource
      name="books"
      list={BooksList}
      icon={BookIcon}
      create={BookCreate}
      edit={BookEdit}
    />
    <Resource name="users" list={UserList} icon={Person} />
  </Admin>
);

export default App;
