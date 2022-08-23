import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import "./css/accountedit.css";

function AccountsEdit({ myData }) {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  return (
    <>
      <Header/>
      <Layout>
        <Container className='accEditCon'>
           <div>
            <h1 className>시작</h1>
            </div>
        </Container>
      </Layout>
    </>
  );
}

export default AccountsEdit;
