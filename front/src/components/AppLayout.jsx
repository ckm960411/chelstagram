import { useState } from 'react';
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import { 
  Box, 
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  AccountCircle as AccountCircleIcon,
  AddCircle as AddCircleIcon,
  Bookmark as BookmarkIcon,
  MarkChatUnread as MarkChatUnreadIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: '#001487',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledBanner = styled(Typography)`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;
const MainTypo = () => (
  <Typography variant="h5" noWrap component="div">
    <Link to="/">
      <StyledBanner>Chelstagram</StyledBanner>
    </Link>
  </Typography>
);

const DrawerMainIcons = [
  {
    icon: () => <HomeIcon />,
    primary: "Home",
    route: '/',
  },
  {
    icon: () => <PersonIcon />,
    primary: "Players",
    route: '/players',
  },
  {
    icon: () => <MarkChatUnreadIcon />,
    primary: "Talk",
    route: '/talk',
  },
]
const DrawerPersonalIcons = [
  {
    icon: () => <AccountCircleIcon />,
    primary: "Profile",
    route: '/profile',
  },
  {
    icon: () => <AddCircleIcon />,
    primary: "Sign Up",
    route: '/signup',
  },
  {
    icon: () => <BookmarkIcon />,
    primary: "Bookmark",
    route: '/bookmark'
  },
]

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          { open && <div></div> }
          <MainTypo />
          <div >
            <IconButton
              color="inherit"
              edge="end"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              edge="end"
              href="/profile"
              sx={{ marginLeft: 2 }}
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DrawerMainIcons.map((item) => (
            <Link to={item.route} key={item.primary} style={{ color: 'inherit', textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon children={item.icon()} />
                  <ListItemText primary={item.primary} />
                </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {DrawerPersonalIcons.map((item) => (
            <Link to={item.route} key={item.primary} style={{ color: 'inherit', textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon children={item.icon()} />
                  <ListItemText primary={item.primary} />
                </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div style={{ maxWidth: '1280px', margin: 'auto' }}>{children}</div>
      </Box>
    </Box>
  );
}