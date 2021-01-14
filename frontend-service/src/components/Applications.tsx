import React from 'react';
import { Container, List, ListItem, Typography } from "@material-ui/core";
import { useApplicationsStyle } from '../styles/applications-styles';
import { fetchJobInfo } from '../data/jobData';

function Applications() {

    const style = useApplicationsStyle();

    const jobs = fetchJobInfo();

    return(
        <Container className={style.applicationsRoot}>
            <Typography>Applications</Typography>
            <List>
                {/* {jobs.map((job, i)=> (
                  <ListItem key={i}>{job.toString()}</TableHeaderCell>
                ))} */}
            </List>
        </Container>
        
    );
}

export default Applications;