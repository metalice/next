import { action, createStore } from "easy-peasy";

import { searchFields } from "utils/search";

export const store = createStore({
  searchOptions: {
    searchFields,
    checked: searchFields.title,
    changeSearchField: action((state, payload) => {
      state.checked = payload;
    }),
  },
  searchTerm: {
    value: "",
    changeSearchTerm: action((state, payload) => {
      state.value = payload;
    }),
  },
});
