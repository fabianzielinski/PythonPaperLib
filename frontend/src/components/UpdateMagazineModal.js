import React from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
// import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { updateMagazine } from "../services/MagazinesService";

const UpdateMagazineModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateMagazine(props.magazine.Id, e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to Update Magazine");
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
            Update Magazine Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Czasopismo">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Czasopismo"
                    required
                    defaultValue={props.magazine.Czasopismo}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group controlId="Nr">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Nr"
                    required
                    defaultValue={props.magazine.Nr}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Data">
                  <Form.Label>Registration No.</Form.Label>
                  <Form.Control
                    type="text"
                    name="Data"
                    required
                    defaultValue={props.magazine.Data}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Dzial">
                  <Form.Label>Dzial</Form.Label>
                  <Form.Control
                    type="text"
                    name="Dzial"
                    required
                    defaultValue={props.magazine.Dzial}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Artykol">
                  <Form.Label>Artykol</Form.Label>
                  <Form.Control
                    type="text"
                    name="Artykol"
                    required
                    defaultValue={props.magazine.Artykol}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Autor">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    name="Autor"
                    required
                    defaultValue={props.magazine.Autor}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="Uwagi">
                  <Form.Label>Uwagi</Form.Label>
                  <Form.Control
                    type="text"
                    name="Uwagi"
                    required
                    defaultValue={props.magazine.Uwagi}
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

export default UpdateMagazineModal;
