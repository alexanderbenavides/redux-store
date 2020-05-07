const initialProps = {
  stateModalAddProduct: false,
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "STATE_ADD_PRODUCT_MODAL":
      return {
        ...state,
        stateModalAddProduct: action.payload,
      };
    default:
      return state;
  }
}
