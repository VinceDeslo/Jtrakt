import React, {useState} from 'react';
import { Button, Container, Checkbox, Input, MenuItem, List, ListItem, ListItemText, Select, Toolbar, Typography } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { Moment } from 'moment';

import { useApplicationsStyle } from '../styles/applications-styles';
import { fetchJobInfo, jobStatusMap } from '../data/jobData';

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

    // date filter state variable
    const [date, setDate] = useState<Moment | null>(
        moment('2016-01-01')
    );

    // Job filter state variable
    const [jobStatus, setStatus] = useState<typeof jobStatusMap>(jobStatusMap);

    // Job state variable handler
    const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {

        setStatus(event.target.value as typeof jobStatusMap)
    } 

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
                <Select
                    label="Job Status:"
                    labelId="Job Status"
                    id="job-status-dialog"
                    multiple
                    value={jobStatus}
                    onChange={handleStatusChange}
                    input={<Input />}
                    //renderValue={}
                >{
                    jobStatusMap.map((job) =>
                        <MenuItem>
                            <Checkbox checked={job.active} />
                            <ListItemText primary={job.status} />
                        </MenuItem>
                    )
                }
                </Select>
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