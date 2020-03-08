import React, { Component } from "react"
import Layout from "../components/layout"
import Calendar from '../components/Calendar'
import Gallery from '../components/Gallery'

class Events extends Component {
  render = () =>
    <Layout>
      <Gallery />
      <Calendar />
    </Layout>
    
}

// export default Events

// class Events extends Component {
//   render = () =>
//     <Layout>
//       <div style={{ width: '500px', height: '500px' }}>      
//         <iframe src={"https://calendar.google.com/calendar/embed?src=o64676s4p2qr8iqdvcd1j7dbs8%40group.calendar.google.com&ctz=Asia%2FKuala_Lumpur"} style={{border: "0", width: "800px", height: "600px", frameborder: "0", scrolling: "no"}}></iframe>
//       </div>
//     </Layout>
    
// }

export default Events