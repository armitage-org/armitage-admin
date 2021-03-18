import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ImageField,
  EmailField,
} from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ImageField source="image" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default UserList;
