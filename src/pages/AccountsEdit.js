import React from 'react'
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Layout from '../components/layout/Layout';
import Header from '../components/Header';

function AccountsEdit({myData}) {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  return (
    <>
    {/* <Header/> */}
    <Layout>
    <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col md={7}>2 of 3 (wider)</Col>
    </Row>
  </Container>
  </Layout>
  </>
  )
}

export default AccountsEdit