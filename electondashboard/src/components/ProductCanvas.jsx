import { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { nanoid } from "nanoid";

const filterBtns = [
  "appliances",
  "computers & tablets",
  "gaming console",
  "telescope",
];

export default function ProductCanvas(prop) {
  const { action } = prop;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitHandler(event) {
    event.preventDefault();
    const product = {
      category: event.target.category.value,
      description: event.target.description.value,
      id: event.target.id.value,
      image: event.target.image.value,
      name: event.target.name.value,
      price: event.target.price.value,
      sale: event.target.sale.value,
      stock: event.target.stock.value,
    };
    console.log(product);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {action}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" aria-label="Default select example">
                {filterBtns.map((btn, index) => (
                  <option key={index} value={btn}>
                    {btn}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                name="id"
                type="text"
                placeholder="Enter ID"
                defaultValue={nanoid()}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter image"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sale</Form.Label>
              <Form.Control
                name="sale"
                type="number"
                placeholder="Enter Sale"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                name="stock"
                type="number"
                placeholder="Enter Stock"
              />
            </Form.Group>
            <Button type="submit"> + Add product</Button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
