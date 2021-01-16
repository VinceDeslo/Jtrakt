import React from 'react';
import { Container, List, ListItem, Typography } from "@material-ui/core";
import { useApplicationsStyle } from '../styles/applications-styles';
import { fetchJobInfo } from '../data/jobData';

function Applications() {

    const style = useApplicationsStyle();

    //const jobs = fetchJobInfo();

    // mock jobs for testing purposes
    const jobs = [
        {jobId: 1,
        position: 'intern',
        company: 'Self-employed',
        dateAdded: '2021-01-22',
        status: 'APPLIED',
        contact: 'stranger@recruiting.com',
        description: 'some software stuff',
        favorite: false,},
        
        {jobId: 2,
        position: 'senior dev',
        company: 'apple',
        dateAdded: '2021-01-22',
        status: 'APPLIED',
        contact: 'stranger@recruiting.com',
        description: 'some better software stuff',
        favorite: false,}
    ]

    return(
        <Container className={style.applicationsRoot}>
            <Typography>Applications</Typography>
            <List>
                {jobs.map((job, i)=> (
                  <ListItem key={i}>{JSON.stringify(job)}</ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Applications;