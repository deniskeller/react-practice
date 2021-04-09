import React from "react";
import { useSelector } from "react-redux";
import {
  CategoriesNavbar,
  SortProduct,
  ProductItem,
} from "../../components/index";

function Products() {
  const Categories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];

  const products = useSelector((state) => state.products.products);

  return (
    <div className="container">
      <div className="content__top">
        <CategoriesNavbar items={Categories} />
        <SortProduct items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

export default Products;
