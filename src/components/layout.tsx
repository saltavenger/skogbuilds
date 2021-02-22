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
import {Box} from '@material-ui/core'
import {makeStyles, Theme, createStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "@fontsource/tajawal"
import "@fontsource/noto-serif"

const theme = createMuiTheme({
  palette: {
    primary:{ 
      main: '#2c3a81'
    },
    secondary: {
      main: '#5d4e32'
    },
    text: {
      primary: '#1b1b1b',
      secondary: '#f8f6f2'
    }
  },
  typography: {
    fontFamily: "'Tajawal', sans-serif",
    h1: {
      fontFamily: "'Tajawal', sans-serif",
      fontWeight: 600,
      fontSize: 30
    },
    h2: {
      fontFamily: "'Tajawal', sans-serif",
    },
    h3: {
      fontFamily: "'Tajawal', sans-serif",
    },
    h4: {
      fontFamily: "'Tajawal', sans-serif",
    },
    h5: {
      fontFamily: "'Tajawal', sans-serif",
    },
    h6: {
      fontFamily: "'Tajawal', sans-serif",
    },
    subtitle1: {
      fontFamily: "'Noto Serif', serif"
    },
    subtitle2: {
      fontFamily: "'Noto Serif', serif"
    },
    body1: {
      fontFamily: "'Noto Serif', serif"
    },
    body2: {
      fontFamily: "'Noto Serif', serif",
      fontSize: 12
    },
    button: {
      fontFamily: "'Noto Serif', serif"
    },
    caption: {
      fontFamily: "'Noto Serif', serif"
    },
    overline: {
      fontFamily: "'Noto Serif', serif"
    }
  },
  overrides: {
    MuiTab: {
      root: {
        fontFamily: "'Tajawal', sans-serif",
        fontSize: 20
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#f8f6f2"
      }
    },
    MuiLink: {
      root: {
        fontFamily: "'Noto Serif', serif",
        fontSize: 16
      }
    }
  }
});

const drawerWidth = 340;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
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
      <ThemeProvider theme={theme}>
        <Box style={{display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "77px 1fr auto", minHeight: "100vh"}}>
          <Header tab={tab} onDrawerToggle={handleDrawerToggle} />
          <main className={clsx(classes.content, {[classes.contentShift]: open})} style={{marginTop: "20px"}}>
            {children}
          </main>
          <Footer isOpen={open} classData={classes} siteTitle={data.site.siteMetadata?.title} />
        </Box>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.any
}

export default Layout
