import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const RitualSearch = () => {
    const [purposes, setPurposes] = useState([]);
    const [formData, setFormData] = useState({purpose: ''});

    const handlePurposeSelect = e => {
      setFormData({...formData, ...{ purpose: e.target.value }})
    }

    useEffect(() => {
      // Fetch data from the Express server
      
      axios.get('http://localhost:5000/options/options')
        .then(response => {
          console.log("data" ,response.data)
          setPurposes(response.data.purpose)
        })
       
        .catch(error => console.error(error));
    }, []);
    console.log({purposes})
    return purposes && (
      <div>
        <h1>Ritual Options</h1>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Purpose/ Intention</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.purpose}
    label="Purpose"
    onChange={handlePurposeSelect}
  >
{purposes.map((purpose) => (
    <MenuItem value={purpose}>{purpose}</MenuItem>
          ))}
  </Select>
</FormControl>
      </div>
    );
  };
  export default RitualSearch;