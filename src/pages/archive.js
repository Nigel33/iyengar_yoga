import React from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import FindTeacher from '../components/FindTeacher'
import Layout from "../components/layout"
import news1 from '../components/Files/news_1.pdf'
import news2 from '../components/Files/news_2.pdf'
import news3 from '../components/Files/news_3.pdf'
import news4 from '../components/Files/news_4.pdf'
import news5 from '../components/Files/news_5.pdf'
import news6 from '../components/Files/news_6.pdf'
import news7 from '../components/Files/news_7.pdf'
import news8 from '../components/Files/news_8.pdf'
import news9 from '../components/Files/news_9.pdf'


const FourthPage = () => (
  <Layout>
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <Col md={12}>
          <h1 className="mb-4 mt-3">PIYM Newsletter</h1>
          <h4 className="mb-3">2019</h4>
        </Col>
        <Col md={6} sm={ 12 }>
          <ListGroup>
            <ListGroup.Item variant="warning" action target="_blank" href={ news1}>
              Volume 1
            </ListGroup.Item>
            <ListGroup.Item action  variant="warning"target="_blank" href={ news2}>
              Volume 2
            </ListGroup.Item>
            <ListGroup.Item action  variant="warning"target="_blank" href={ news3}>
              Volume 3
            </ListGroup.Item>
            <ListGroup.Item action  variant="warning"target="_blank" href={ news4}>
              Volume 4
            </ListGroup.Item>            
          </ListGroup>
        </Col>
        <Col md={12}>          
          <h4 className="mb-3 mt-3">2020</h4>
        </Col>
        <Col md={6} sm={ 12 }>
          <ListGroup>            
            <ListGroup.Item action variant="warning" target="_blank" href={ news5}>
              Volume 5
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={12}>          
          <h4 className="mb-3 mt-3">2021</h4>
        </Col>
        <Col md={6} sm={ 12 }>
          <ListGroup>            
            <ListGroup.Item action variant="warning" target="_blank" href={ news6 }>
              Volume 6
            </ListGroup.Item>
            <ListGroup.Item action variant="warning" target="_blank" href={ news7 }>
              Volume 7
            </ListGroup.Item>
            <ListGroup.Item action variant="warning" target="_blank" href={ news8 }>
              Volume 8
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={12}>          
          <h4 className="mb-3 mt-3">2022</h4>
        </Col>
        <Col className="mb-5" md={6} sm={ 12 }>
          <ListGroup>            
            <ListGroup.Item action variant="warning" target="_blank" href={ news9 }>
              Volume 9
            </ListGroup.Item>    
          </ListGroup>        
        </Col>
      </Row>
    </Container>
    
    {/* <h4>2019</h4>
    
    <ul>
      <li><a href={news1} download>Download the directly imported file</a>{` `}</li>
    </ul> */}
    
  </Layout>
)

export default FourthPage

// import React from "react"
// import downloadFile from '../downloads/file.pdf' 

//   const IndexPage = () => (
//   <>
//     <a href={downloadFile} download>Download the directly imported file</a>{` `}
//     {/* <a href={`download.pdf`} download>Download the file from the static folder</a> */}
//   </>
// )

// export default IndexPage