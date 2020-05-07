export const getStateLocalStoraga = () => {
  const productsStorage = localStorage.getItem("products");
  if (productsStorage === null) return undefined;
  return JSON.parse(productsStorage);
};

export const setStateLocalStorage = (state) => {
  localStorage.setItem("products", JSON.stringify(state));
};
