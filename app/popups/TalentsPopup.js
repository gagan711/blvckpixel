import React, { useEffect } from 'react';

const clientId = '866udw2eenejyb';
const clientSecret = 'YFqpARPHq1GWHCwu';
const redirectUri = 'https://www.blvckpixel.com/';

function authenticate() {
  window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
}

function fetchJobPosts(accessToken) {
  fetch('https://api.linkedin.com/v2/jobs', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch job posts');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching job posts:', error);
  });
}

const TalentsPopup = ({ onClose }) => {
  // useEffect(() => {
  //   // Function to check access token and fetch job posts
  //   const checkAccessTokenAndFetch = () => {
  //     const accessToken = localStorage.getItem('linkedin_access_token');
  //     if (accessToken) {
  //       // Access token exists, fetch job posts
  //       fetchJobPosts(accessToken);
  //     } else {
  //       // Access token doesn't exist, authenticate user
  //       authenticate();
  //     }
  //   };

  //   // Call the function unconditionally
  //   checkAccessTokenAndFetch();
  // }, []);
  return (
    <div className="popup-container">
      <div className="popup talents">
        <h2>[ jobs ]</h2>
        <h6>Are you interested in joining our visionary team?<br />
These are some talents we are looking for.
</h6>
<div className='job-listings' style={{ display: 'block' }}>
<div className='listing' style={{textAlign: 'center'}}>
<h3>Nothing to see here for the moment ..</h3>
</div>
<button className='close' onClick={onClose}>x</button>
      </div>
      </div>
    </div>
  );
};

export default TalentsPopup;
