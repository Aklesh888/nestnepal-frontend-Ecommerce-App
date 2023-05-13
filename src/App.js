import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
import ShopContextProvider from "./context/ShopContext";

const queryClient = new QueryClient();
function App() {
  return (
    <ShopContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ShopContextProvider>
  );
}

export default App;
