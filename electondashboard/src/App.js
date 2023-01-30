import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/AsideMenu";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { asideMenus } from "./util/data"
import axios from "axios"


function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:2022/products").then((res) => setProducts(res.data))
  }, [])
  console.log(products)
  return (
    <div>
      <Header />
      <div style={{ display: "flex", background: "orange" }}>
        <Aside menus={asideMenus} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {products && <Route path="/products" element={<Products data={products} />} />}
          <Route path="/orders" element={<>hello2</>} />
          <Route path="/users" element={<>hello3</>} />
          <Route path="/moderator" element={<>hello4</>} />
          <Route path="/settings" element={<>hello5</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
