import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TopNav from './../components/TopNav';

export default function About(props) {
  return (
    <React.Fragment>
      <TopNav />
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col sm="12">
            <p className="text-center">This is just a simpe Star Wars App</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
