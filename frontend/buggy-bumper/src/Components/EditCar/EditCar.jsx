import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { editCar } from "../../api/adminCars";

const EditCar = ({ editModal, setEditModal, setCars, car }) => {
  const { showModal, carId, pos } = editModal;

  const handleClose = () =>
    setEditModal({
      showModal: false,
      carId: undefined,
      pos: undefined,
    });

  const handleEditCar = async (event) => {
    event.preventDefault();
    const updatedCar = {
      carType: event.target[0].value,
      doors: event.target[1].value,
      seats: event.target[2].value,
      bags: event.target[3].value,
      price: parseInt(event.target[4].value),
      image: event.target[5].value,
    };
    const finalCar = await editCar(carId, updatedCar);

    finalCar._id = carId;
    setCars((prevState) => {
      const newCarList = [...prevState];
      newCarList[pos] = finalCar;
      return newCarList;
    });
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Carro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEditCar}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Marca
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" defaultValue={car?.carType} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Número de puertas
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" defaultValue={car?.doors} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Número de sillas
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" defaultValue={car?.seats} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Número de maletas
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" defaultValue={car?.bags} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Precio
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="number" defaultValue={car?.price} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Subir imagen
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" defaultValue={car?.image} />
            </Col>
          </Form.Group>
          <Modal.Footer>
            <Button type="submit">Editar</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCar;
