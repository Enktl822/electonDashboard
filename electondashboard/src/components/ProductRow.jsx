import Dropdown from "react-bootstrap/Dropdown";

export default function ProductRow(prop) {
  const { data } = prop;

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
            <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Вебсайтаас нуух</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
