import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/jobs';

export const getJobs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add more functions as needed (e.g., getJobById, createJob, etc.)
