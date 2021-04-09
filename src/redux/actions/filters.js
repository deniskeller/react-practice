const setSortBy = (sortName) => ({
  type: "SET_SORT_BY",
  payload: sortName,
});

const setCategory = (cartIndex) => ({
  type: "SET_CATEGORY",
  payload: cartIndex,
});
