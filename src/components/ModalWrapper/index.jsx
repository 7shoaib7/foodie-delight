import React from 'react';
import { Modal, Box,IconButton  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";

const ModalWrapper = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text.primary',
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};


export default ModalWrapper;
