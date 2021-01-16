import React, {useState} from 'react';
import { Container, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { Moment } from 'moment';

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

    const [date, setDate] = useState<Moment | null>(
        moment('2016-01-01')
    );

    return(
        <Container className={style.applicationsRoot}>
            <Typography>Applications</Typography>
            <Toolbar>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="As of:"
                    format="MM/dd/yyyy"
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Toolbar>
            <List>
                {jobs.map((job, i)=> (
                  <ListItem key={i}>{JSON.stringify(job)}</ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Applications;