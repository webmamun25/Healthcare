import React from 'react';

import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

import servicedetail from './serviceDetail';

const Details = () => {
  const { deatilsId } = useParams();

  const totaldesc = servicedetail.find((desc) => desc.id === deatilsId);
  console.log(totaldesc);

  return (
    <div>
      <Card>
        <Card.Header>
          {" "}
          <img src={totaldesc.img} alt="" />{" "}
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {deatilsId} </p>
            <footer className="blockquote-footer">
              {totaldesc.description}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
