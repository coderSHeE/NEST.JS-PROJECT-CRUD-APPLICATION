import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Adddata = () => {
  const brand = useRef("");
  const Transition = useRef("");
  const totalOrders = useRef("");
  const totalOrderValue = useRef("");
  const grossMarginPercentage = useRef("");
  const navigate = useNavigate();
  const id = "63cbbdccc046b63080f6f493";

 
  const addEmployeeHandler = () => {
    var payload = {
      date: "2023-01-18T00:00:00.000+0000",
      brand: brand.current.value,
      Transition: Transition.current.value,
      totalOrders: totalOrders.current.value,
      totalOrderValue: totalOrderValue.current.value,
      grossMarginPercentage: grossMarginPercentage.current.value,
    };

    
    axios.post(`http://localhost:4000/client/${id}`, payload).then(() => {
      navigate("/");
    });

  };
 
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Add new client details</legend>
            <Form.Group className="mb-3" controlId="formBrand">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" ref={brand} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTransactionType">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Control type="text" ref={transactionType} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTotalOrders">
              <Form.Label>Total Orders</Form.Label>
              <Form.Control type="number" ref={totalOrders} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTotalOrderValue">
              <Form.Label>Total Order Value</Form.Label>
              <Form.Control type="number" ref={totalOrderValue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGrossMarginPercentage">
              <Form.Label>Gross Margin Percentage</Form.Label>
              <Form.Control type="number" ref={grossMarginPercentage} />
            </Form.Group>
            <Button type="button" variant="primary" onClick={adddataHandler}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Adddata;























