import React from 'react'
import Header from '../components/Header';
import MainCard from '../components/MainCard'
import Layout from '../components/layout/Layout'
import Container from "react-bootstrap/Container"
import "./css/mainpage.css";


const MainPage = () => {
  return (
    <>
      <Header />
      <Layout fluid>
      <Container className='cardMainAll'>
        <MainCard/>
      </Container>
    </Layout>
  </>
  )
}

export default MainPage;