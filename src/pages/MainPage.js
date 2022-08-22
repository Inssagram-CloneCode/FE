import React from 'react'
import MainCard from '../components/MainCard'
import Layout from '../components/layout/Layout'
import Card from "react-bootstrap/Card";
const MainPage = () => {
  return (
    <Layout>
    <Card>
    <div className='layout'>
      <MainCard/>
      <div className='miniCard'>
       
      </div>
    </div>
    </Card>
   </Layout>
  )
}

export default MainPage