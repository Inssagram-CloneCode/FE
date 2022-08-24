import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import "./css/mainpage.css";
import apis from "../api/axios";
import { getAllThunk } from "../redux/asyncThunk/homeThunk";

const MainPage = () => {
  
  const dispatch = useDispatch();
  
  // const postList =  useSelector((state) => state.postList);
  const postList = [1,2,3,4,5];
  useEffect(() => {
    // apis.post_all().then((res) => {
      //   console.log('All Posts',res.data);
      
      // });
      dispatch(getAllThunk());
  }
 
  , [])
  return (
    <>
      <Header />
      <Layout>
        <Container className="cardMainAll">
          {postList.map((post,idx)=>
          <div key={idx}>
          <MainCard />
          </div>
          )
          }
          {/* <MainCard /> <MainCard /> <MainCard /> <MainCard /> */}
        </Container>
      </Layout>
    </>
  );
};

export default MainPage;
