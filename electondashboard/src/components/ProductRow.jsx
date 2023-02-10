import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { Button, Offcanvas, Form } from "react-bootstrap";

export default function ProductRow(prop) {
  const { data, setProducts } = prop;

  function deleteProductHandler(id) {
    axios.delete(`http://localhost:2022/product/${id}`).then((res) => {
      if (res.data.success) {
        setProducts(res.data.data);
      } else {
        console.log(res.data.success);
      }
    });
  }

  return (
    <tr>
      <td>
        <img src={data.image} alt="hey" width={50} height={50} />
      </td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.stock}</td>
      <td>{data.sale}%</td>
      <td>{data.category}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <Button onClick={() => deleteProductHandler(data.id)}>
                Delete
              </Button>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Button>Edit</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
