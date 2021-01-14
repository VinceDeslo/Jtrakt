import axios from 'axios';
import { routes } from '../routing/routes';

// Fetch data from job info API   
export const fetchJobInfo = async () => {
        
    const [jobs] = await Promise.all([
        axios.get(routes.applications),
    ])

    return jobs;
}