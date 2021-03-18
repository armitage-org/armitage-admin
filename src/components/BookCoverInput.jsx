import React from "react";
import { TextInput } from "react-admin";
import { addField } from "ra-core";
import { useFormState } from "react-final-form";

import { makeStyles } from "@material-ui/core/styles";

import BookCoverSuggestion from "./BookCoverSuggestion";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  inputWrapper: {
    flex: "1",
  },
  previewContainer: {
    textAlign: "center",
    margin: "1rem 1.5rem",
  },
  previewTitle: {
    marginBottom: "0.5rem",
    opacity: 0.7,
  },
  preview: {
    display: "inline-block",
    lineHeight: '320px',
    boxShadow: theme.shadows[6],
  },
}));

const BookCoverInput = (props) => {
  const classnames = useStyles();
  const handleCoverSelect = (imgUrl) => props.input.onChange(imgUrl);
  const {
    active,
    values: { title, author },
  } = useFormState();

  const searchCoverQuery =
    active !== "title" && active !== "author" && title && author
      ? `${title} ${author}`
      : "";

  return (
    <div className={classnames.container}>
      <div className={classnames.inputWrapper}>
        <TextInput
          {...props}
          helperText={`Paste cover image url or ${
            searchCoverQuery ? "" : "fill title and author and then"
          } select one of suggested covers`}
        />
        <BookCoverSuggestion
          onSelect={handleCoverSelect}
          searchQuery={searchCoverQuery}
        />
      </div>
      <figure className={classnames.previewContainer}>
        <figcaption className={classnames.previewTitle}>
          Selected cover preview
        </figcaption>
        <img
          src={props.input.value}
          alt={props.input.value ? "Failed to load" : "No image selected"}
          width="250"
          height="320"
          className={classnames.preview}
        />
      </figure>
    </div>
  );
};

export default addField(BookCoverInput);
