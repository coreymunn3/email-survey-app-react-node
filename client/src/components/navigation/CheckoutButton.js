import React, { Fragment, useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
// components
import CheckoutModal from './CheckoutModal';

const CheckoutButton = () => {
  // controls for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSuccess, setSnackbarSuccess] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleSnackbarOpen = (success, message) => {
    setSnackbarOpen(true);
    setSnackbarSuccess(success);
    setSnackbarMessage(message);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant='contained'
        disableElevation
        color='secondary'
        onClick={handleModalOpen}
      >
        Add Credits
      </Button>
      <CheckoutModal
        modalIsOpen={modalOpen}
        handleClose={handleModalClose}
        handleSnackbarOpen={handleSnackbarOpen}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity={snackbarSuccess ? 'success' : 'error'}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Fragment>
  );
};

export default CheckoutButton;
