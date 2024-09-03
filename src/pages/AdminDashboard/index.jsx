import React, { useState } from 'react';
import { Box, Button, Typography, AppBar } from '@mui/material';
import mockData from '../../services/mockAPI';
import RestaurantList from '../../components/RestaurantList';
import ModalWrapper from '../../components/ModalWrapper';
import RestaurantForm from '../../components/RestaurantForm';
import "./index.css"
import ConfirmationModal from '../../components/ConfirmationModal';


const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState(mockData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [restId,setRestId] = useState(null);

  const handleAddRestaurant = () => {
    setEditingRestaurant(null);
    setIsModalOpen(true);
  };

  const handleDeleteRestaurant = (id) => {
    setRestId(id)
    setConfirmationOpen(true);
  };

  const handleEditRestaurant = (restaurant) => {
    setEditingRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleSubmitForm = (formData) => {
    if (editingRestaurant) {
      // Edit restaurant logic
      const updatedRestaurants = [...restaurants]
      const findUpdatedRestaurantIndex = updatedRestaurants.findIndex((restaurant =>
        restaurant.id === editingRestaurant.id))
      updatedRestaurants[findUpdatedRestaurantIndex] = formData;
      setRestaurants(updatedRestaurants);
    } else {
      // Add new restaurant logic
      setRestaurants([...restaurants, { id: restaurants.length + 1, ...formData }]);
    }
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== restId);
    setRestaurants(updatedRestaurants);
    setConfirmationOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: 1,
          zIndex: 1200,
        }}

      >
        <Box className="top-header">
          <Box className="header-left">
            <Box className="header-logo">
              FD
            </Box>
            <Typography sx={{
              fontSize: '1rem',
            }}>
              Foodie's Delight
            </Typography>
          </Box>

          <Button variant="contained" onClick={handleAddRestaurant} sx={{
            backgroundColor: 'mediumpurple',
          }}>
            Add Restaurant
          </Button>
        </Box>
      </AppBar>

      <Box sx={{
        marginTop: "5rem"
      }}
        className="restaurant-list"
      >

        <RestaurantList restaurants={restaurants} onDelete={handleDeleteRestaurant} onEdit={handleEditRestaurant} />
      </Box>

      <ModalWrapper open={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <RestaurantForm initialData={editingRestaurant} onSubmit={handleSubmitForm} />
      </ModalWrapper>
      <ConfirmationModal
        open={confirmationOpen}
        handleClose={() => setConfirmationOpen(false)}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default AdminDashboard;
