import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MdNavigateBefore, MdNavigateNext, MdSettings, MdFolderShared, MdStar } from "react-icons/md";
import { useSidebarStyles } from '../styles/sidebar-styles';

function Sidebar() {

    // Import styling
    const style = useSidebarStyles();

    // Drawer state
    const [open, setOpen] = React.useState(false);

    // Hook for handling drawer movement
    const toggleDrawer = () => {
        if(open) setOpen(false);
        else setOpen(true)
    }

    // Sidebar component tree
    return(
        <div className={style.sideBarRoot}>
            <Drawer
            className={clsx(style.drawer, {
                [style.drawerOpen]: open,
                [style.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                  [style.drawerOpen]: open,
                  [style.drawerClose]: !open,
                }),
            }} 
            variant="permanent"
            >
                <div className={style.drawerContent}>
                    <List>
                        <ListItem button>
                            <ListItemIcon onClick={toggleDrawer}>
                                {open? <MdNavigateBefore/> : <MdNavigateNext/>}
                            </ListItemIcon>
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