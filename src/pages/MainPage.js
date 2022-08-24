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
  
  // const state =  useSelector((state) => state);
  // console.log('mainPagestate',state)
  const postList =  useSelector((state) => state.home.postList);
  // console.log('mainPage',postList)
  useEffect(() => {
    dispatch(getAllThunk());
  }
 
  , [])
  return (
    <>
      <Header />
      <Layout>
        <Container className="cardMainAll">
          {postList?.map((post,idx)=>
          <div key={idx}>
          <MainCard post={post}/>
          </div>
          )
          }
        </Container>
      </Layout>
    </>
  );
};

export default MainPage;
