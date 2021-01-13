import React from 'react';
import { useContentStyles } from '../styles/content-styles';
import { Route } from 'react-router-dom';
import { routes } from '../routing/routes';
import Applications from './Applications';
import Favorites from './Favorites';
import Settings from './Settings';

function PageContent() {

    const style = useContentStyles();

    return(
        <div className={style.contentRoot}>
            <Route exact path={routes.applications} component={Applications}/>
            <Route path={routes.favorites} component={Favorites}/>
            <Route path={routes.settings} component={Settings}/>
        </div>
    );
}

export default PageContent;