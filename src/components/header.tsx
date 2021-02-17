import { AppBar, Tab, Tabs, Toolbar, Box, IconButton, Drawer, Divider } from "@material-ui/core"
import { Link, navigate } from "gatsby"
import clsx from 'clsx';
import { Menu, ChevronLeft, Home} from '@material-ui/icons'
import PropTypes from "prop-types"
import React from "react"
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }
  })
);

const Header = ({ siteTitle, tab, onDrawerToggle }) => {
  const [value, setValue] = React.useState<boolean|number>(tab);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    navigate(href);
  };
  const handleHome = () => {
    setValue(false);
    navigate('/');
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    if (onDrawerToggle) {
      onDrawerToggle(true);
    }
  };
  const handleDrawerClose = () => {
    setOpen(false);
    if (onDrawerToggle) {
      onDrawerToggle(false);
    }
  };

  return (
    <header>
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
        <Toolbar>
          <Box display={{xs: 'none', md: 'flex'}} width={1} alignItems="center">
            <Box flexGrow={1}>
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  onClick={handleHome}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}>
                  {siteTitle}
                </Link>
              </h1>
            </Box>
            <Box alignSelf="flex-end">
              <Tabs value={value}>
                <Tab component="a"
                  id="nav-tab-0"
                  aria-controls="nav-tabpanel-0"
                  onClick={e => handleClick(e, '/projects')}
                  label="Projects"
                  href="/projects"/>
                <Tab component="a"
                  id="nav-tab-1"
                  aria-controls="nav-tabpanel-1"
                  onClick={e => handleClick(e, '/testimonials')}
                  label="Testimonials"
                  href="/testimonals"/>
                <Tab component="a"
                  id="nav-tab-2"
                  aria-controls="nav-tabpanel-2"
                  onClick={e => handleClick(e, '/quote')}
                  label="Get a quote"
                  href="/quote"/>
              </Tabs>
            </Box>
          </Box>
          <Box display={{xs: 'block', md: 'none'}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <Box flexGrow={1} p={2}>
            <IconButton
              color="inherit"
              aria-label="Home"
              onClick={handleHome}
              edge="start">
                  <Home />
            </IconButton>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <Tabs value={value} orientation="vertical">
          <Tab component="a"
            id="nav-tab-0"
            aria-controls="nav-tabpanel-0"
            onClick={e => handleClick(e, '/projects')}
            label="Projects"
            href="/projects"/>
          <Tab component="a"
            id="nav-tab-1"
            aria-controls="nav-tabpanel-1"
            onClick={e => handleClick(e, '/testimonials')}
            label="Testimonials"
            href="/testimonals"/>
          <Tab component="a"
            id="nav-tab-2"
            aria-controls="nav-tabpanel-2"
            onClick={e => handleClick(e, '/quote')}
            label="Get a quote"
            href="/quote"/>
        </Tabs>
      </Drawer>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  tab: PropTypes.any,
  onDrawerToggle: PropTypes.func
}

Header.defaultProps = {
  siteTitle: `James Areskog`,
  tab: false
}

export default Header;
