import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoriesNavbar,
  SortProduct,
  ProductItem,
  LoadingItem,
} from "../../components/index";
import { addProductToCart } from "../../redux/actions/cart";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchGetProducts } from "../../redux/actions/products";

const Categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Products() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const category = useSelector((state) => state.filters.category);
  const sortBy = useSelector((state) => state.filters.sortBy);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetProducts(category, sortBy));
  }, [dispatch, category, sortBy]);

  const sortByCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );
  const sortByType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const handlerAddProductToCart = (item) => {
    console.log("item: ", item);
    dispatch(addProductToCart(item));
  };

  return (
    <div className="container">
      <div className="content__top">
        <CategoriesNavbar
          selectItem={category}
          items={Categories}
          onClickItem={sortByCategory}
        />
        <SortProduct
          activeSortByType={sortBy.type}
          items={sortItems}
          onClickItem={sortByType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? products &&
            products.map((product) => (
              <ProductItem
                key={product.id}
                {...product}
                totalCount={
                  cartItems[product.id] && cartItems[product.id].length
                }
                addProduct={handlerAddProductToCart}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingItem key={index} />)}
      </div>
    </div>
  );
}

export default Products;
