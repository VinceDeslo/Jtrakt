import { makeStyles, Theme } from '@material-ui/core/styles';

export const useSidebarStyles = makeStyles((theme:Theme) => ({

    root: {
        display: 'flex',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerContent: {
        paddingTop: 60,
        overflow: 'auto',
    }
    
}));