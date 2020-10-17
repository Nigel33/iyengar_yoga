import React from 'react';
import "./styles.css";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import garland from '../Images/garland.jpg'
import family from '../Images/gurujiFamily.jpg'
import newGeneration from '../Images/newGeneration.jpg'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
  query{
    image1: 
      file(
        relativePath: { eq: "garland.jpg"}      
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }    
    image2: 
      file(
        relativePath: { eq: "gurujiFamily.jpg"}      
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }    

      image3: 
      file(
        relativePath: { eq: "newGeneration.jpg"}      
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }    

    } 
    `)
    
    return (
      // <div className="hero-lg">
      //   <section className="cta d-flex align-items-center h-100">
      //     <article className="w-50 text-light ml-auto">
      //       <blockquote class="blockquote">
      //         <h2 class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h2>
      //       </blockquote>
      //       <span>Swami G</span>
      //     </article>
      //   </section>
      // </div> 
      <div className="hero-section">
        <Carousel style={{ width: '100%', margin: 'auto' }}>
          <Carousel.Item>            
            <Img fluid={data.image1.childImageSharp.fluid}
              alt="test" />               
          </Carousel.Item>     
          <Carousel.Item>            
            <Img fluid={data.image2.childImageSharp.fluid}
              alt="test" />               
          </Carousel.Item>   
          <Carousel.Item>            
            <Img fluid={data.image3.childImageSharp.fluid}
              alt="test" />               
          </Carousel.Item>         
          {/* <Carousel.Item>
            <img                  
              src={family}
              alt="2nd slide" 
              style={{ width: '100%', height: '700px', objectFit: 'cover' }}                 
            />
          </Carousel.Item>
          <Carousel.Item>
            <img                  
              src={newGeneration}
              alt="Third slide"
              style={{ width: '100%', height: '700px', objectFit: 'cover' }}                   
            />          
          </Carousel.Item>  */}
        </Carousel>
      </div>
    );   

}

// export const query = graphql`
//   query{
//     file(
//       relativePath: { eq: "path-to-file/myfile.jpg"}
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 1200) {
//           base64
//           aspectRatio
//           src
//           srcSet
//           sizes
//         }
//       }
//     }
//   }
// `

// export default () => {
//   const data = useStaticQuery(graphql`
//   query MyQuery {
//   file(relativeDirectory: {eq: "garland.jpg"}) { 
//     childImageSharp: {
//       fluid: { 
//         base64
//         aspectRatio
//         sizes
//         src
//         srcSet             
//       }
//     }
//   }
// }
//   `)
// }

// query MyQuery {
//   file(relativeDirectory: {eq: "garland.jpg"}, 
//     childImageSharp: {
//       fluid: { 
//         base64
//         aspectRatio
//         sizes
//         src
//         srcSet             
//       }
//     }
// }

// const Hero = () => {
//   return (
//     // <div className="hero-lg">
//     //   <section className="cta d-flex align-items-center h-100">
//     //     <article className="w-50 text-light ml-auto">
//     //       <blockquote class="blockquote">
//     //         <h2 class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h2>
//     //       </blockquote>
//     //       <span>Swami G</span>
//     //     </article>
//     //   </section>
//     // </div> 
//     <div className="hero-section">
//       <Carousel style={{ width: '100%', height: '700px', margin: 'auto' }}>
//         <Carousel.Item>
//           <Img fluid={data.file.childImageSharp.fluid}
//             alt="test" />
//           {/* <img                  
//             src={garland}
//             alt="First slide"
//             style={{ width: '100%', height: '700px', objectFit: 'cover' }}                  
//           />           */}
//         </Carousel.Item>
//         {/* <Carousel.Item>
//           <img                  
//             src={family}
//             alt="2nd slide" 
//             style={{ width: '100%', height: '700px', objectFit: 'cover' }}                 
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img                  
//             src={newGeneration}
//             alt="Third slide"
//             style={{ width: '100%', height: '700px', objectFit: 'cover' }}                   
//           />          
//         </Carousel.Item>  */}
//       </Carousel>
//     </div>
//   );   
// }

// export default Hero