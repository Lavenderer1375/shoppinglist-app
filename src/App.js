import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";

//components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
