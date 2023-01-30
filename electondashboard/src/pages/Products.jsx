import { Table } from "react-bootstrap";
import ProductCanvas from "../components/ProductCanvas";
import ProductRow from "../components/ProductRow";

export default function Products(prop) {
  const { data } = prop;
  console.log(data);
  return (
    <div>
      <ProductCanvas action="add" />
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
          {data.map((product, index) => (
            <ProductRow key={index} data={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
