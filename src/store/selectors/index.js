export const selectProducts = (state) => state.products;

export const selectFavoriteProducts = (state) => {
  state.products.products = state.products.products.filter((product) => product.isFavorite)
  return state.products;
};
