import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RitualSearch = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
      // Fetch data from the Express server
      axios.get('http://localhost:5000/options/options')
        .then(response => {
          console.log(response.data)
          setGuides(response.data.guides)
        })
       
        .catch(error => console.error(error));
    }, []);
    console.log({guides})
    return guides && (
      <div>
        <h1>Ritual Options</h1>
        <ul>
          {guides.map((guide) => (
            <li key={guide}>{guide}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default RitualSearch;