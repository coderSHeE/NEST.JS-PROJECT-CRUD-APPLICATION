import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 
const Adddata = () => {
  const name = useRef("");
  const role = useRef("");
  const experience = useRef("");
  const navigate = useNavigate();
 
  const adddataHandler = () => {
    var payload = {
      name: name.current.value,
      role: role.current.value,
      experience: experience.current.value,
    };
    axios.post("http://localhost:4000/employee", payload).then(() => {
      navigate("/");
    });
  };
 
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Add new client details</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" ref={brand} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control type="text" ref={role} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" ref={experience} />
            </Form.Group>
            <Button
              type="button"
              variant="primary"
              onClick={addEmployeeHandler}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddEmployee;
