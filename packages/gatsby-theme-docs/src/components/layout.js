import React from 'react'; // set react react-dom gatsby as peer deps

const Layout = ({ children }) => (
  <React.Fragment>
    <header>gatsby-theme-docs</header>
    <main>{children}</main>
  </React.Fragment>
)

export default Layout