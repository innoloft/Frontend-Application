import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios"

function EditForm({ name, type, close }) {
  const [title, setTitle] = useState(name);
  const [newType, setNewType] = useState(type);

  const updateProduct = () => {
    axios.put("https://api-test.innoloft.com/product/6781/", {
      name: title,
      type: {
        name: newType
      }
    }).then(response => console.log(response.data));
    close()
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
        <TextField
          label="Name"
          fullWidth
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Name"
          fullWidth
          type="text"
          value={type}
          onChange={(e) => setNewType(e.target.value)}
        />
        <div style={{ marginTop: 20}} >
          <Button style={{ marginRight: 20}} variant="contained" color="secondary" onClick={close}>
            Close
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
