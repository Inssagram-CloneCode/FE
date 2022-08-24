import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import "./css/mainpage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Layout fluid>
        <Container className="cardMainAll">
          <MainCard /> <MainCard /> <MainCard /> <MainCard />
          <div className="miniCard"></div>
        </Container>
      </Layout>
    </>
  );
};

export default MainPage;
