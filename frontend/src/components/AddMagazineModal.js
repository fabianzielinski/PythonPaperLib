import React from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
// import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { addMagazine } from "../services/MagazinesService";

const AddMagazineModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addMagazine(e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to Add Magazine");
      }
    );
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill In Magazine Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Czasopismo">
                  <Form.Label> Czasopismo</Form.Label>
                  <Form.Control
                    type="text"
                    name="Czasopismo"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Nr">
                  <Form.Label>Nr </Form.Label>
                  <Form.Control type="text" name="Nr" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="Data">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="text"
                    name="Data"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Dzial">
                  <Form.Label>Dział</Form.Label>
                  <Form.Control
                    type="text"
                    name="Dzial"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Artykol">
                  <Form.Label>Artykól</Form.Label>
                  <Form.Control
                    type="text"
                    name="Artykol"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Autor">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    name="Autor"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Uwagi">
                  <Form.Label>Uwagi</Form.Label>
                  <Form.Control
                    type="text"
                    name="Uwagi"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMagazineModal;
