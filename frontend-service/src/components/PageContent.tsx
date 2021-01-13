import React from 'react';
import { useContentStyles } from '../styles/content-styles';

function PageContent() {

    const style = useContentStyles();

    return(
        <div className={style.contentRoot}>
            <h1>PageContent</h1>
        </div>
    );
}

export default PageContent;