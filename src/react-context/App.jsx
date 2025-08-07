// import { Button } from "./Button";
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext";
import { ProductList } from "./ProductList";
// import { ThemeProvider } from "./ThemeContext";

export function App() {
  return (
    // <ThemeProvider>
    // <Button />
    // </ThemeProvider>
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}
