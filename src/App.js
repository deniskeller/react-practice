import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./components/index";
import { Cart, Products } from "./pages/index";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/products";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((response) => dispatch(getProducts(response.data.pizzas)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
