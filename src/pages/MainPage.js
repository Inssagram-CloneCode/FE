import React from 'react'
import MainCard from '../components/MainCard'
import Layout from '../components/layout/Layout'
import Container from "react-bootstrap/Container"
import "./css/mainpage.css";
const MainPage = () => {
  return (
    <Layout fluid>
    <Container className='cardMainAll'>
      <MainCard/>
      <div className='miniCard'>
      </div>
    </Container>
   </Layout>
  )
}

export default MainPage