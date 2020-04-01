import createDataContext from "./createDataContext";

const productReducer = (state, action) => {
  switch (action.type) {
    case "fetch_product":
      return {
        ...state,
        ...action.playload
      };
    case "set_selected":
      return { ...state, selected: action.playload };
    default:
      return state;
  }
};

const fetchProduct = dispatch => async () => {
  // const response = await trackerApi.get("/tracks");
  const response = {
    data: {
      name: "Hand White Lace Skater Dress",
      composition: "50% cotton,45% polyester, 5% polyamide.",
      filling: "100% polyester.",
      hood_fur: "64% acrylic,23% modacrylic,13% polyester",
      images: [
        "/images/products/Hand White Lace Skater Dress1.jpeg",
        "/images/products/Hand White Lace Skater Dress2.jpeg",
        "/images/products/Hand White Lace Skater Dress3.jpeg",
        "/images/products/Hand White Lace Skater Dress4.jpeg"
        // "/images/products/Hand White Lace Skater Dress1.jpeg",
        // "/images/products/Hand White Lace Skater Dress2.jpeg",
        // "/images/products/Hand White Lace Skater Dress3.jpeg",
        // "/images/products/Hand White Lace Skater Dress4.jpeg"
      ],
      price: "$49.00",
      star: 3.5,
      SKU: "REF. LA-140",
      categories: ["Fashions", "Main 01", "Main 02"],
      tags: ["Blazer", "chair", "Coat", "dress", "light", "Living", "Main 01"]
    }
  };
  dispatch({ type: "fetch_product", playload: response.data });
};

const setSelected = dispatch => async num => {
  dispatch({ type: "set_selected", playload: num });
};

export const { Provider, Context } = createDataContext(
  productReducer,
  { fetchProduct, setSelected },
  {
    name: "",
    composition: "",
    filling: "",
    hood_fur: "",
    images: [],
    selected: 0,
    price: 0,
    SKU: "",
    categories: [],
    tags: [],
    star: 0
  }
);
