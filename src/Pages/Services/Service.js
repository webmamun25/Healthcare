import React from 'react';

import {
  Card,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  console.log(service);
  const { name, img, id, description } = service;

  return (
    <Col xs lg="4" className="mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 40)}</Card.Text>
          <Link to={`/details/${id}`}>
            <button className=" btn btn-primary">Read More</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
