import * as React from "react";
import { SimpleForm, TextInput, BooleanInput, required } from "react-admin";

import { makeStyles } from "@material-ui/core/styles";
import BookCoverInput from "./BookCoverInput";

const useStyles = makeStyles({
  title: {
    marginTop: 0,
    fontSize: "1.3rem",
  },
});

const BookForm = (props) => {
  const styles = useStyles();

  return (
    <SimpleForm {...props}>
      <h1 className={styles.title}>{props.title}</h1>

      <TextInput source="title" label="Book title" validate={required()} />
      <TextInput source="author" label="Author" validate={required()} />
      <TextInput multiline source="info" label="Book info" fullWidth />
      <BookCoverInput source="image" label="Cover image URL" type="url" fullWidth />
      <BooleanInput source="available" label="Is book available" defaultValue={true} />
    </SimpleForm>
  );
};

export default BookForm;
