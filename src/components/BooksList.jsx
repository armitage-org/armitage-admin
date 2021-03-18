import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  ImageField,
} from "react-admin";

const BooksList = (props) => (
  <List title="Books in Library" {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="image" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="info" />
      <BooleanField source="available" />

      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default BooksList;
