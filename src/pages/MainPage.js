import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import "./css/mainpage.css";
import { getAllThunk } from "../y_redux/modules/asyncThunk/homeThunk";

const MainPage = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.home.postList);
  useEffect(() => {
    dispatch(getAllThunk());
  }, [dispatch]);
  useEffect(() => {
    console.log(postList);
  }, [postList]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="cardMainAll">
          {postList?.map((post, idx) => (
            <div key={idx}>
              <MainCard post={post} />
            </div>
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default MainPage;
