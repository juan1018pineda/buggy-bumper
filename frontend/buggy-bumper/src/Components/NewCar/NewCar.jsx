import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addCar } from "../../api/adminCars";
import "./NewCar.scss";

const NewCar = ({ addModal, setAddModal, setCars }) => {
  const handleClose = () => setAddModal(false);

  const handleAddCar = async (event) => {
    event.preventDefault();
    const imageName = `${process.env.REACT_APP_URL_BASE}${event.target[0].value}.${
      event.target[5].files[0].type.split("/")[1]
    }`;

    const newCar = {
      carType: event.target[0].value,
      doors: event.target[1]?.value,
      seats: event.target[2]?.value,
      bags: event.target[3]?.value,
      price: parseInt(event.target[4]?.value),
      image: imageName,
      file: event.target[5]?.files[0],
    };

    const car = await addCar(newCar);
    setCars((prevState) => [...prevState, car.data]);
    handleClose();
  };

  return (
    <>
      <Modal show={addModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Carro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCar}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Marca
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Número de puertas
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Número de sillas
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Número de maletas
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Precio
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6}>
                Subir imagen
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="file" />
              </Col>
            </Form.Group>
            <Modal.Footer>
              <Button type="submit">Agregar</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewCar;
