import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import App from "./App"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TableChartIcon from '@material-ui/icons/TableChart'
import { Link } from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Graph from "./Graph"
// import Checkout from "./Checkout"
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
const drawerWidth = 240;
const styles = { 
  sideNav: { 
    marginTop: '-60px', 
    zIndex: 3, 
    marginLeft: '0px', 
    position: 'fixed', 
  }, 
  link: { 
    color: 'black', 
    textDecoration: 'none', 
  } 
  }; 
  

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'top',
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome
          </Typography>
        {/* <Grid justifyContent="right">
          <Button component={Link} to="/signin" variant="contained" color="secondary" position = "right">Sign In</Button>
          
          </Grid>
    */}
        </Toolbar>
       
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        

































        <Link to='/graph' > 
			<List> 
     
			<ListItem button key='DashBoard'> 
				<ListItemIcon>
          {/* <MailIcon/> */}
          <DashboardIcon/>
				</ListItemIcon> 
				<ListItemText primary='DashBoard' /> 
			</ListItem> 
			</List> 
		</Link> 


   

		<Link to='/checkout' > 
		<List> 
			<ListItem button key='User Pofile'> 
			<ListItemIcon>
        <AccountCircleIcon/>
			</ListItemIcon> 
			<ListItemText primary='User Profile' /> 
			</ListItem> 
			</List> 
		</Link> 

        <Link to='/gmap'> 
		<List> 
			<ListItem button key='Map'> 
			<ListItemIcon>
        <LocationOnIcon/>
			</ListItemIcon> 
			<ListItemText primary='Map' /> 
			</ListItem> 
			</List> 
		</Link> 



    <Link to='/table'> 
		<List> 
			<ListItem button key='Table List'> 
			<ListItemIcon>
      <TableChartIcon/>
			</ListItemIcon> 
			<ListItemText primary='Table List' /> 
			</ListItem> 
			</List> 
		</Link> 


    <Link to='/'> 
		<List> 
			<ListItem button key='Notification'> 
			<ListItemIcon>
        <NotificationsIcon/>
			</ListItemIcon> 
			<ListItemText primary='Notification' /> 
			</ListItem> 
			</List> 
		</Link> 



    <Link to='/icons'> 
		<List> 
			<ListItem button key='Icons'> 
      <AppsIcon/>
			<ListItemIcon>
			</ListItemIcon> 
			<ListItemText primary='Icons' /> 
			</ListItem> 
			</List> 
		</Link> 














      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        
      >
        {/* <Checkout/> */}
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}
