import React, { useState } from 'react';

export default function Work(props) {
  const [work, setWork] = useState({
    companyName: '',
    jobTitle: '',
    jobDuration: '',
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setWork(prevState => ({ ...prevState, [name]: value }));
  }

  const handleEdit = () => {
    props.onEdit();
    setWork(props.work);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(work);
  };


  

    const {companyName, jobTitle, jobDuration} = work;

    return (
      <div>
        <h2>WORK EXPERIENCE</h2>
        {props.workEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Job Duration:
              <input
                type="number"
                name="jobDuration"
                value={jobDuration}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>
              Company Name: {companyName}
            </p>
            <p>
              Job Title: {jobTitle}
            </p>
            <p>
              Job Duration: {jobDuration}
            </p>
            <button onClick={handleEdit}>Edit Details</button>
          </div>
        )}
      </div>
    );
  }

