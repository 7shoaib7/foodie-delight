import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const RestaurantForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    location: initialData?.location || '',
    category: initialData?.category || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Restaurant Name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="description"
        label="Description"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <TextField
        name="location"
        label="Location"
        fullWidth
        margin="normal"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <TextField
        name="category"
        label="Category"
        select
        fullWidth
        margin="normal"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <MenuItem value="Fast Food">Fast Food</MenuItem>
        <MenuItem value="Fine Dining">Fine Dining</MenuItem>
        <MenuItem value="Casual Dining">Casual Dining</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" sx={{
        backgroundColor:"mediumpurple"
      }}>
        Submit
      </Button>
    </form>
  );
};

export default RestaurantForm;
