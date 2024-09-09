"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs`);
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.job_title}</h2>
            <p>{job.job_location}</p>
            <p>{job.category_names}</p>
            <p>{job.time_posted}</p>
            <p>{job.job_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
