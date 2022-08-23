import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Layout from '../components/layout/Layout';

function AccountsEdit({myData}) {
  console.log(myData);
  return (
    <Layout>
    <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col md={7}>2 of 3 (wider)</Col>
    </Row>
  </Container>
  </Layout>
  )
}

export default AccountsEdit