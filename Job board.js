const JobListing = ({ job }) => {
    return (
      <div className="job-listing">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <button>Apply Now</button>
      </div>
    );
  };
  
  export default JobListing;