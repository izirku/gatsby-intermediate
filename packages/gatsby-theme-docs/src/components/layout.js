/** @jsx jsx  */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'; // set react react-dom gatsby as peer deps
import { Global } from '@emotion/core'

const Layout = ({ children }) => (
  <Fragment>
    <header
      sx={{ bg: 'primary', color: 'background', fontFamily: 'heading', p: 3 }}
    >gatsby-theme-docs</header>
    <main sx={{ mx: 'auto', maxWidth: 650, width: '90vw'}}>{children}</main>
  </Fragment>
)

export default Layout