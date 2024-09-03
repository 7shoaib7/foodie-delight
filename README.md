# FoodieDelight

FoodieDelight is a modern food delivery application designed to manage restaurants and their menus. It provides a comprehensive interface for restaurant administrators to add, edit, and delete restaurant information, along with a search functionality to easily find restaurants.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Add a New Restaurant**: Provides a form to add a new restaurant with details such as name, description, location, and category.
- **Edit Restaurant Details**: Allows modification of existing restaurant information.
- **Delete Restaurant**: Removes a restaurant from the platform with a confirmation dialog.
- **Search Functionality**: Enables searching for restaurants by name.
- **Responsive Design**: Ensures the application is usable on both desktop and mobile devices.
- **Confirmation Modals**: Confirms actions like deleting a restaurant to prevent accidental deletions.

## Technologies Used

- **Frontend**: React.js, Material-UI
- **Development Tooling**: Vite (for development server and build tool)
- **State Management**: React hooks
- **Styling**: CSS-in-JS with Material-UI

## Installation

To get started with the FoodieDelight application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/foodiedelight.git
   cd foodiedelight

2. **Install Dependencies**
    Install the required packages using npm: 
     - npm install


3. **Start the Development Server**
     Run the following command to start the local development server:
      - npm run dev
      - Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

1. **Adding a Restaurant**

- Click on the "Add Restaurant" button in the top-right corner.
- Enter the restaurant’s name, description, location, and category in the form that appears.
- Click "Submit" to add the restaurant.


2. **Editing a Restaurant**

- Click the "Edit" button on the restaurant card you wish to modify.
- Update the restaurant’s details in the form that appears.
- Click "Submit" to save changes.

3. **Deleting a Restaurant**

- Click the "Delete" button on the restaurant card.
- Confirm the deletion in the confirmation modal.

3. **Searching for Restaurants**

- Use the search bar at the top of the page to filter restaurants by name.
- The results will update dynamically as you type.