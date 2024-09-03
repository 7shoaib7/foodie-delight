import React, { useState } from "react";
import { Box, Grid, TextField ,Typography } from "@mui/material";
import RestaurantCard from "../RestaurantCard";

const RestaurantList = ({ restaurants, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 3
        }}
      >

        <TextField
          label="Search Restaurants"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // fullWidth
          margin="normal"
          sx={{ width: '100%', maxWidth: '600px' }}
        />
      </Box>
      <Box sx={{
        padding: '2rem'
      }}>
        {filteredRestaurants.length > 0 ? (
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
        ) : (
          <Typography variant="h6" color="text.secondary" align="center">
            No restaurants found matching your search criteria.😔
          </Typography>
        )}

      </Box>

    </>
  );
};

export default RestaurantList;
