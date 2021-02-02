import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@material-ui/core';
import Confirmation from './Confirmation';
import SurveyFormStep from './SurveyFormStep';

const useStyles = makeStyles({
  container: {
    maxWidth: '800px',
  },
  paper: {
    marginTop: '1rem',
  },
  buttonGroup: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '0 0.5rem',
  },
});

const SurveyForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Create Survey', 'Review & Submit'];

  const isEndState = activeStep === steps.length;
  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <Container className={classes.container}>
      <Paper>
        <Typography
          variant='h4'
          className={classes.paper}
          align='center'
          gutterBottom
        >
          Create a New Survey
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((stepName, index) => (
            <Step key={index}>
              <StepLabel>{stepName}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {
          // conditionally render step body based on activeStep
          isEndState ? (
            <Confirmation />
          ) : (
            <SurveyFormStep activeStep={activeStep} />
          )
        }
        {
          // conditionally render buttons based on form step
          // 1 button if in end state, 2 otherwise
          isEndState ? (
            <Container className={classes.buttonGroup}>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={() => setActiveStep(0)}
              >
                Return
              </Button>
            </Container>
          ) : (
            <Container className={classes.buttonGroup}>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={backStep}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={nextStep}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Container>
          )
        }
      </Paper>
    </Container>
  );
};

export default SurveyForm;
