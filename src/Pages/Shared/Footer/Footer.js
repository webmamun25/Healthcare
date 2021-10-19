import './Footer.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="full-footer">
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,160C480,171,600,149,720,138.7C840,128,960,128,1080,128C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="maincontent">
        <Container>
          <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quos voluptates atque, vero delectus voluptas ad accusamus
              voluptatibus illum, asperiores fugit. Maiores veritatis ad
              consectetur incidunt ratione, eaque omnis consequuntur.
            </Col>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem enim neque consequuntur ipsum aliquam est saepe
              deleniti nihil, expedita pariatur quisquam debitis vero fugiat
              odio, impedit accusamus iste porro obcaecati.
            </Col>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              doloribus corporis eos perspiciatis fugiat ipsum magni animi
              beatae nam similique. Amet obcaecati cumque tempora in corrupti
              iste reprehenderit accusantium aliquam?
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
