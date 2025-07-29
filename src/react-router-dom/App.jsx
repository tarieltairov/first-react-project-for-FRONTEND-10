import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<p>тут должна быть Главная страница</p>} />
        <Route path="/about" element={<p>тут должна быть страница О нас</p>} />
        <Route path="/cart" element={<p>тут должна быть страница Корзина</p>} />
      </Routes>

      <p>тут должен быть Footer</p>
    </BrowserRouter>
  );
};

export default App;
