import React from 'react';
import { Container, Typography } from '@material-ui/core';

const getStepContent = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <Typography>You have just started</Typography>;
    case 1:
      return <Typography>Almost Done, Review and Confirm</Typography>;
  }
};

const SurveyFormStep = ({ activeStep }) => {
  return <Container>{getStepContent(activeStep)}</Container>;
};

export default SurveyFormStep;
