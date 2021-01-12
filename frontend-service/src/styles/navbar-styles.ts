import { makeStyles, Theme } from '@material-ui/core/styles';

export const useNavbarStyles = makeStyles((theme:Theme) => ({

    root:{
        flexgrow: 1,
    },
    navBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    companyName: {
        flex: 1,
        margin: theme.spacing(2),
    },
    authButton: {

    }

}));