import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import "./index.css";

const ConfirmationModal = ({ open, handleClose, handleConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box className="modal-box-confirm">
        <Typography id="confirmation-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this restaurant?
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};


export default ConfirmationModal;
