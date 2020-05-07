export const addProductAction = (state) => {
  return {
    type: "ADD_PRODUCT",
    payload: state,
  };
};

export const deleteTweetAction = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};
