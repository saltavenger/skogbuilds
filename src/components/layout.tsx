/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import clsx from "clsx";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

import Header from "./header"
import "./layout.css"

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: '84px',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    }
  })
);

const Layout = ({ children, tab }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const handleDrawerToggle = (isOpen) => {
    setOpen(isOpen);
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} tab={tab} onDrawerToggle={handleDrawerToggle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className={clsx(classes.content, {[classes.contentShift]: open})}>{children}</main>
        <footer style={{ marginTop: `2rem`}} className={clsx(classes.content, {[classes.contentShift]: open})}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.any
}

export default Layout
