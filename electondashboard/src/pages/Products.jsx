import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import ProductCanvas from "../components/ProductCanvas";
import ProductRow from "../components/ProductRow";

export default function Products(prop) {
  const { data, products, setProducts } = prop;
  const [categories, setCategories] = useState([]);

  data.map((e) => {
    if (categories.includes(e.category) === false) {
      setCategories([...categories, e.category]);
    }
  });

  function categoryHandler(event) {
    console.log(event);
    console.log(event.target.value);
    if (event.target.value === "all") {
      setProducts(data);
    } else {
      const filtered = data.filter(
        (product) => product.category === event.target.value
      );
      setProducts(filtered);
    }
  }

  function searchHandler(e) {
    e.preventDefault();
    if (e.target.name.value === "") {
      setProducts(data);
    } else {
      const filtered = data.filter((product) =>
        product.name.toLowerCase().includes(e.target.name.value.toLowerCase())
      );
      setProducts(filtered);
    }
  }

  return (
    <div>
      <ProductCanvas action="add" />
      <div className="d-flex justify-content-between">
        <select
          onChange={(event) => {
            categoryHandler(event);
          }}
          style={{ width: "250px" }}
        >
          <option value="all">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <form onSubmit={searchHandler}>
          <input name="name" placeholder="search" type="text" />
          <button type="submit">хайх</button>
        </form>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Хямдрал</th>
            <th>Категори</th>
            <th>kebab icon</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} data={product} setProducts={setProducts} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
