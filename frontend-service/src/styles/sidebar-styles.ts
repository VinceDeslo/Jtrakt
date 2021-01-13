import { makeStyles, Theme } from '@material-ui/core/styles';

export const useSidebarStyles = makeStyles((theme:Theme) => ({

    root: {
        display: 'flex',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerContent: {
        paddingTop: 60,
    },
    drawerOpen: {
        width: 240,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(6) + 1,
        },
      },
    
}));