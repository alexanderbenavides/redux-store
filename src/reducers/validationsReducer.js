const initialProps = {
  errorFormAddproduct: false,
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "VALIDATION_FORM_ADD_PRODUCT":
      return {
        ...state,
        errorFormAddproduct: action.payload,
      };
    default:
      return state;
  }
}
