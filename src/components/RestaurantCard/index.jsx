import React from "react";
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

const RestaurantCard = ({ restaurant, onDelete, onEdit }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{restaurant.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {restaurant.description}
        </Typography>
        <Typography variant="body2">{restaurant.location}</Typography>
        <Typography variant="body2">{restaurant.category}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => onEdit(restaurant)}>
          Edit
        </Button>
        <Button color="secondary" onClick={() => onDelete(restaurant.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
