import { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Tablee = () => {
  const [client, setclient] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get("http://localhost:4000/client").then((response) => {
      setclient(response.data);
    });
  }, []);
 
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-4 offset-md-4">
            <Button variant="primary" type="button" onClick={() => navigate('add-data')}>
              Add
            </Button>
          </Col>
        </Row>
        <Tablee striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Brand</th>
              <th>Transaction Type</th>
              <th>Total Orders</th>
              <th>Total Order Value</th>
              <th>Gross Margin Percentage</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((cli) => (
              <tr key={cli._id}>
                <td>{cli.date}</td>
                <td>{cli.brand}</td>
                <td>{cli.transactionType}</td>
                <td>{cli.totalOrders}</td>
                <td>{cli.totalOrderValue}</td>
                <td>{cli.grossMarginPercentage}</td>
              </tr>
            ))}
          </tbody>
        </Tablee>
      </Container>
    </>
  );
};
export default  Tablee;
