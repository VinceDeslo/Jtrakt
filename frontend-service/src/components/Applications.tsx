import React from 'react';
import axios from 'axios';
import { Container, List, ListItem, Typography } from "@material-ui/core";
import { useApplicationsStyle } from '../styles/applications-styles';
import { routes } from '../routing/routes';

function Applications() {

    const style = useApplicationsStyle();

    // Fetch data from job info API   
    const fetchJobInfo = async () => {
        
        const [jobs] = await Promise.all([
            axios.get(routes.applications),
        ])

        return jobs;
    }

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