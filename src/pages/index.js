import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import Content from '../components/Content'
import Committee from '../components/Committee'
import Membership from '../components/Membership'
import Teacher from '../components/Teacher'


const IndexPage = () => (
  <Layout>
    <Hero />
    <Content />
    <Membership />    
    <Committee />    
    <Teacher />
  </Layout> 
)

/* <Layout> */
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>

export default IndexPage
