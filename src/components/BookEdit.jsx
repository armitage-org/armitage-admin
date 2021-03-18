import * as React from "react";
import { Edit } from "react-admin";
import BookForm from "./BookForm";

const BookEdit = (props) => (
  <Edit {...props}>
    <BookForm title="Edit book" />
  </Edit>
);

export default BookEdit;
