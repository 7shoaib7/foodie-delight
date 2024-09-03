import React, { useState } from "react";
import { Grid, TextField} from "@mui/material";
import RestaurantCard from "../RestaurantCard";

const RestaurantList = ({ restaurants, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField
        label="Search Restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} md={6} lg={4} key={restaurant.id}>
            <RestaurantCard
              restaurant={restaurant}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RestaurantList;
