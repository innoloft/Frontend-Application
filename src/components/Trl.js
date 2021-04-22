import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  TextField, MenuItem
} from "@material-ui/core";

function Trl({data}) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(data);
  var newOptions = [];

  useEffect(() => {
    try {
    axios.get("https://api-test.innoloft.com/trl")
    .then((response) => {
      response.data.map(item => (
        newOptions.push({value: item.id, label: item.name})
      ))
    })
    .then(setOptions(newOptions))
    } catch (e) {
      return console.error(e.message);
    }
  }, []);

  return (
    <>
      <TextField
        label="TRL"
        select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default Trl;
