import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { Product } from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />}>
          <Route path="active" element={<p>данные активной корзины</p>} />
          <Route path="archive" element={<p>данные архивной корзины</p>} />
        </Route>

        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
