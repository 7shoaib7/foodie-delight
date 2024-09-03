import React, { useState } from 'react';
import { Button } from '@mui/material';
import mockData from '../../services/mockAPI';
import RestaurantList from '../../components/RestaurantList';
import ModalWrapper from '../../components/ModalWrapper';
import RestaurantForm from '../../components/RestaurantForm';


const AdminDashboard = () => {
  console.log("mock", mockData)
  const [restaurants, setRestaurants] = useState(mockData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  const handleAddRestaurant = () => {
    setEditingRestaurant(null);
    setIsModalOpen(true);
  };

  const handleDeleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
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

  return (
    <>
      <Button variant="contained" onClick={handleAddRestaurant}>
        Add Restaurant
      </Button>
      <RestaurantList restaurants={restaurants} onDelete={handleDeleteRestaurant} onEdit={handleEditRestaurant} />
      <ModalWrapper open={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <RestaurantForm initialData={editingRestaurant} onSubmit={handleSubmitForm} />
      </ModalWrapper>
    </>
  );
};

export default AdminDashboard;
