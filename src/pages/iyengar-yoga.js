import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BKSIyengar from "../components/BksIYengar"
import Rimyi from "../components/Rimyi"
import BellurTrust from "../components/BellurTrust"

const SecondPage = () => (
  <Layout>
    <BKSIyengar/>
    <Rimyi />
    <BellurTrust />
  </Layout>
)

export default SecondPage
