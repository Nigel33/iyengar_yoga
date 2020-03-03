
import React from "react"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="PIYM" />
      <div>
        <main>{children}</main>
        <footer className="d-flex justify-content-end" style={{height: '50px', fontSize: '10px', backgroundColor: 'eee'}}>          <div>
            © {new Date().getFullYear()}, Designed by
            {` `}
            <a href="https://nigelhing">Nigel Hing</a>
          </div>         
        </footer>
      </div>
    </>
  )
}

export default Layout
