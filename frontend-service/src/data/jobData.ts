import axios from 'axios';
import { routes } from '../routing/routes';

// Fetch data from job info API   
export const fetchJobInfo = async () => {
        
    const [jobs] = await Promise.all([
        axios.get<jobInfo[]>(routes.applications),
    ])

    return jobs;
}

// Expected data format
export interface jobInfo {
    jobId: number,
    position: string,
    company: string,
    dateAdded: string,
    status: string,
    contact: string,
    description: string,
    favorite: boolean,
    [ key: string ]: any,
}

// Status enum for application routing
export enum jobStatus {
    All = 'ALL',
    Prospect = 'PROSPECT',
    Applied = 'APPLIED',
    Interview = 'INTERVIEW',
    Technical = 'TECHNICAL',
    Failed = 'FAILED',
    Refused = 'REFUSED',
    Ghosted = 'GHOSTED',
}

// Provide a map of enum values and active state
export const jobStatusValues = Object.values(jobStatus).filter((item)=>{
    if(typeof item === 'string') return item;
});
