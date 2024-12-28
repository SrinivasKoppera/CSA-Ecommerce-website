import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { CartProvider } from "./context-api/cart-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </SnackbarProvider>
  </StrictMode>
);
