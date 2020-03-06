import createDataContext from "./createDataContext";
// import trackerApi from "../api/tracker";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "fetch_products":
      return { ...state, products: action.playload };
    case "change_pagesRange":
      return { ...state, pagesRange: action.playload };
    case "change_page":
      return { ...state, currentPage: action.playload };
    default:
      return state;
  }
};

const fetchProducts = dispatch => async () => {
  // const response = await trackerApi.get("/tracks");
  const response = {
    data: [
      "Bella Two-Piece Block Heel Sandals",
      "Wrap Coat",
      "Men's Lightweight Windbreaker",
      "Wrap Coat",
      "Men's Lightweight Windbreaker",
      "Bella Two-Piece Block Heel Sandals",
      "Wrap Coat",
      "Men's Lightweight Windbreaker",
      "Wrap Coat",
      "Men's Lightweight Windbreaker",
      "Bella Two-Piece Block Heel Sandals",
      "Wrap Coat",
      "Men's Lightweight Windbreaker",
      "Wrap Coat",
      "Men's Lightweight Windbreaker"
    ]
  };
  dispatch({ type: "fetch_products", playload: response.data });
};

const changePagesRange = dispatch => num => {
  dispatch({ type: "change_pagesRange", playload: num });
};

const changePage = dispatch => num => {
  dispatch({ type: "change_page", playload: num });
};

export const { Provider, Context } = createDataContext(
  productsReducer,
  { fetchProducts, changePagesRange, changePage },
  { products: [], pagesRange: 12, currentPage: 1 }
);
