import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/themes";
import { CoffeeProvider } from "./providers/CoffeeProvider";
import { CartProvider } from "./providers/CartProvider";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <CoffeeProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </CoffeeProvider>
    </ThemeProvider>
  )
}