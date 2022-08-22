import React from 'react'
import MainCard from '../components/MainCard'
import Layout from '../components/layout/Layout'
import Card from "react-bootstrap/Card";
import "./mainpage.css";
const MainPage = () => {
  return (
    <Layout>
    <Card className='cardMainAll'>
      <MainCard/>
      <div className='miniCard'>
      </div>
    </Card>
   </Layout>
  )
}

export default MainPage