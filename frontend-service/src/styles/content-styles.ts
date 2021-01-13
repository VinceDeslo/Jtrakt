import { makeStyles, Theme } from '@material-ui/core/styles';

export const useContentStyles = makeStyles((theme:Theme) => ({

    contentRoot:{
        flexGrow: 1,
        padding: theme.spacing(8),
    },

}));