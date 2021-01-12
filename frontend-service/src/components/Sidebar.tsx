import React from 'react';
//import clsx from 'clsx';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MdNavigateNext, MdSettings, MdFolderShared, MdStar } from "react-icons/md";
import { useSidebarStyles } from '../styles/sidebar-styles';

function Sidebar() {

    const style = useSidebarStyles();

    return(
        <div className={style.root}>
            <Drawer
            className={style.drawer} 
            variant="permanent">
            <div className={style.drawerContent}>
            <List>
                <ListItem button>
                    <ListItemIcon><MdNavigateNext/></ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon><MdFolderShared/></ListItemIcon>
                    <ListItemText>Applications</ListItemText> 
                </ListItem>
                <ListItem button>
                    <ListItemIcon><MdStar/></ListItemIcon>
                    <ListItemText>Favorites</ListItemText> 
                </ListItem>
                <ListItem button>
                    <ListItemIcon><MdSettings/></ListItemIcon>
                    <ListItemText>Settings</ListItemText> 
                </ListItem>
            </List>
        </div>
        </Drawer>

        </div>
    );
}

export default Sidebar;