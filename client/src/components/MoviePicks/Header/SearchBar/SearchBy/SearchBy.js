import React from "react";
import { Checkbox, InputLabel, makeStyles } from "@material-ui/core";
import { useStoreActions, useStoreState } from "easy-peasy";

const useStyles = makeStyles(() => ({
  checkbox: {
    textTransform: "capitalize",
    display: "inline-flex",
  },
}));

const SearchBy = ({ value }) => {
  const classes = useStyles();
  const { checked } = useStoreState((state) => state.searchOptions);
  const { changeSearchField } = useStoreActions((actions) => actions.searchOptions);

  return (
    <div className={classes.checkbox}>
      <InputLabel>
        <Checkbox checked={checked === value} onChange={() => changeSearchField(value)} />
        {value}
      </InputLabel>
    </div>
  );
};

export default SearchBy;
