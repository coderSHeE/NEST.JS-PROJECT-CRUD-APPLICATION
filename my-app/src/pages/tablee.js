import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Tablee = () => {
  const [allclient, setAllClient] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/client').then((response) => {
      setAllClient(response.data);
    });
  }, []);

  const handleRowUpdate = (id, updatedData) => {
    // Send a PUT request to update the data for the row with the given ID
    axios.put(`http://localhost:3000/client/${id}`, updatedData).then(() => {
      // If the request is successful, update the state to re-render the table
      setAllClient((prevData) =>
        prevData.map((data) => (data.id === id ? { ...data, ...updatedData } : data))
      );
    });
  };

  const handleRowDelete = (id) => {
    // Send a DELETE request to delete the row with the given ID
    axios.delete(`http://localhost:3000/client/${id}`).then(() => {
      // If the request is successful, update the state to re-render the table
      setAllClient((prevData) => prevData.filter((data) => data.id !== id));
    });
  };

  return (
    
    <Container className="mt-2">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Brand</th>
            <th>Transition Type</th>
            <th>Total Order</th>
            <th>Total Order Value</th>
            <th>Grose margin Percentage %</th>
            <th>Created Date</th>
            <th>Update Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allclient.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.date}</td>
              <td>{data.brand}</td>
              <td>{data.transitionType}</td>
              <td>{data.totalOrder}</td>
              <td>{data.totalOrderValue}</td>
              <td>{data.grossMarginPercentage}</td>
              <td>{data.createdDate}</td>
              <td>{data.updatedDate}</td>
              <td>
                <button onClick={() => handleRowUpdate(data.id, { updatedDate: new Date() })}>
                  Update
                </button>
                <button onClick={() => handleRowDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Tablee;
