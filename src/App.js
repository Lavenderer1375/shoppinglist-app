import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";

//components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCard from "./components/ShopCard";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar />
        <Switch>
          <Route
            path="/products/:id"
            component={ProductsDetails}
          />
          <Route
            path="/products"
            component={Store}
          />
          <Route
            path="/card"
            component={ShopCard}
          />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
