import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import config from "../config";

const { searchApiKey, searchEngineId } = config;

const useStyles = makeStyles(() => ({
  preview: {
    border: "1px solid rgba(100, 100, 100, 0.3)",
    margin: "0 0.5rem",
    cursor: "pointer",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem auto",
  },
  infoMessage: {
    marginTop: "1rem",
    fontFamily: "Roboto, sans-serif",
    opacity: 0.5,
  },
}));

const BookCoverSuggestion = ({ searchQuery, onSelect }) => {
  const classnames = useStyles();
  const [state, setState] = React.useState({
    status: "",
  });

  React.useEffect(() => {
    if (searchQuery) {
      const q = encodeURIComponent(searchQuery);

      setState({
        status: "loading",
      });

      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${searchApiKey}&cx=${searchEngineId}&q=${q}&searchType=image&imgSize=large&alt=json`
      )
        .then((response) => response.json())
        .then((data) =>
          setState({
            status: "succeeded",
            items: data.items || [],
          })
        )
        .catch((error) => {
          console.error(error);
          setState({
            status: "failed",
            error,
          });
        });
    }
  }, [searchQuery]);

  return (
    <div>
      {state.status === "loading" && (
        <div className={classnames.loader}>
          <CircularProgress />
          <span className={classnames.infoMessage}>
            Loading book cover suggestions
          </span>
        </div>
      )}
      {state.status === "succeeded" && state.items.length === 0 && (
        <span className={classnames.infoMessage}>
          Sorry, no cover suggestions found
        </span>
      )}
      {state.status === "succeeded" &&
        state.items.length > 0 &&
        state.items.map((img) => (
          <img
            key={img.link}
            src={img.link}
            height="160"
            alt=""
            className={classnames.preview}
            onClick={() => onSelect(img.link)}
          />
        ))}
    </div>
  );
};

export default BookCoverSuggestion;
