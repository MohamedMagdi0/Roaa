import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductReservation from "./pages/ProductReservation";
import ServiceReservation1 from "./pages/ServiceReservation1";
import ServiceReservation2 from "./pages/ServiceReservation2";
import Category from "./pages/Category";
import Success from "./pages/Success";
import "./i18n/config";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/product-reservation"
              element={<ProductReservation />}
            />
            <Route
              path="/service-reservation-1"
              element={<ServiceReservation1 />}
            />
            <Route
              path="/service-reservation-2"
              element={<ServiceReservation2 />}
            />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
