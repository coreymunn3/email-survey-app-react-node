import React, { Fragment, useState } from 'react';
import { Button } from '@material-ui/core';
// components
import CheckoutModal from './CheckoutModal';

const CheckoutButton = () => {
  // controls for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant='contained'
        disableElevation
        color='secondary'
        onClick={handleOpen}
      >
        Add Credits
      </Button>
      <CheckoutModal modalIsOpen={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default CheckoutButton;
