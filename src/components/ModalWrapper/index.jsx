import React from 'react';
import { Modal, Box } from '@mui/material';
import "./index.css";

const ModalWrapper = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        {children}
      </Box>
    </Modal>
  );
};


export default ModalWrapper;
