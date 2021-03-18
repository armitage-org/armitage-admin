import * as React from "react";
import { Create } from "react-admin";
import BookForm from "./BookForm";

const BookCreate = (props) => (
  <Create {...props}>
    <BookForm title="Add new book" />
  </Create>
);

export default BookCreate;
