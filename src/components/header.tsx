import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Box,
  Grid,
  IconButton,
  Drawer,
  Divider
} from "@material-ui/core"
import { Link, navigate } from "gatsby"
import clsx from 'clsx';
import { Menu, ChevronLeft, Home} from '@material-ui/icons'
import PropTypes from "prop-types"
import React from "react"
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const drawerWidth = 340;

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

const Header = ({ tab, onDrawerToggle }) => {
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
    <Box>
      <AppBar color="inherit" position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })} style={{minHeight: '77px'}}>
        <Toolbar>
          <Box display={{xs: 'none', md: 'block'}} width={1}>
            <Grid container spacing={1} justify="space-between" alignItems="center" wrap="nowrap">
              <Grid item>
                <h1 style={{marginBottom: 0, padding: '10px', whiteSpace: 'nowrap'}}>
                  <Link
                      to="/"
                      onClick={handleHome}
                      style={{
                        color: `#1b1b1b`,
                        textDecoration: `none`,
                      }}>
                      <Box component="span" textAlign="center">
                        <Box component="span" fontFamily="'Tajawal', sans-serif" fontWeight={600} fontSize={30} display="block" letterSpacing={3}>JAMES ARESKOG</Box>
                        <Box component="span" fontFamily="'Tajawal', sans-serif" fontWeight={200} fontSize={22} display="block">Carpentry &amp; Construction</Box>
                      </Box>
                  </Link>
                </h1>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
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
        <Box className={classes.drawerHeader}>
          <Box flexGrow={1} p={1.5}>
            <Link
                to="/"
                onClick={handleHome}
                style={{
                  color: '#1b1b1b',
                  textDecoration: `none`,
                }}>
                <Box component="span" textAlign="center">
                  <Box component="span" fontFamily="'Tajawal', sans-serif" fontWeight={600} fontSize={30} display="block" letterSpacing={3}>JAMES ARESKOG</Box>
                  <Box component="span" fontFamily="'Tajawal', sans-serif" fontWeight={200} fontSize={22} display="block">Carpentry &amp; Construction</Box>
                </Box>
            </Link>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </Box>
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
    </Box>
  );
}

Header.propTypes = {
  tab: PropTypes.any,
  onDrawerToggle: PropTypes.func
}

Header.defaultProps = {
  tab: false
}

export default Header;
