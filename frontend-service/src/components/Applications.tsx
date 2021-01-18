import React, {useState} from 'react';
import { Container, Input, InputLabel, MenuItem, List, ListItem, Select, Toolbar, Typography, FormControl } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { Moment } from 'moment';

import { useApplicationsStyle } from '../styles/applications-styles';
import { fetchJobInfo, jobStatus, jobStatusValues } from '../data/jobData';

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
        status: 'GHOSTED',
        contact: 'stranger@recruiting.com',
        description: 'some better software stuff',
        favorite: false,}
    ]

    // date filter state variable
    const [date, setDate] = useState<Moment | null>(
        moment('2016-01-01')
    );

    // Job filter state variable
    const [selectedStatus, setSelectedStatus] = useState<string>(jobStatus.Applied);

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
                <FormControl>
                    <InputLabel id="job-status-label">Status</InputLabel>
                <Select
                    labelId="job-status-label"
                    id="job-status-dialog"
                    value={selectedStatus? selectedStatus: ""}
                    onChange={e=>setSelectedStatus(e.target.value as string)}
                    input={<Input/>}
                >{
                    jobStatusValues.map((item: string) =>
                        <MenuItem value={item}>{item}</MenuItem>
                    )
                }
                </Select>
                </FormControl>
            </Toolbar>
            <List>
                {jobs.map((job, i)=> (
                  <ListItem key={i}>{JSON.stringify(job)}</ListItem>
                ))}
            </List>
            <Typography>{selectedStatus}</Typography>
        </Container>
    );
}

export default Applications;