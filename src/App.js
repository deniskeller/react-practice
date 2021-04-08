import { Header } from "./components/index";
import { Cart, Products } from "./pages/index";
import { Route } from "react-router-dom";

function App() {
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
