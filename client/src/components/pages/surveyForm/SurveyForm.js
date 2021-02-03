import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Tooltip,
} from '@material-ui/core';
import Confirmation from './Confirmation';
import SurveyFormSteps from './SurveyFormSteps';

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
  // stepper
  const steps = ['Create Survey', 'Review & Submit'];
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isEndState = activeStep === steps.length;
  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);
  // form state
  const [formData, setFormData] = useState({});
  // form validation
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'You must provide an email title';
    }
    if (!values.subject) {
      errors.subject = 'You must provide an email subject';
    }
    if (!values.body) {
      errors.body = 'You must provide an email body';
    }
    if (!values.recipients) {
      errors.recipients = 'You must provide at least one email recipients';
    }
    return errors;
  };
  const errorsExist = Object.keys(validate(formData)).length > 0;

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
          // conditionally render form step body
          isEndState ? (
            <Confirmation />
          ) : (
            <SurveyFormSteps
              activeStep={activeStep}
              formData={formData}
              setFormData={setFormData}
              errors={validate(formData)}
            />
          )
        }
        {
          // conditionally render buttons
          // 1 button if in end state, 2 otherwise
          isEndState ? (
            <Container className={classes.buttonGroup}>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={() => setActiveStep(0)}
              >
                Back To My Surveys
              </Button>
            </Container>
          ) : (
            <Container className={classes.buttonGroup}>
              <Button
                component={Link}
                to='/surveys'
                className={classes.button}
                variant='outlined'
              >
                Cancel
              </Button>

              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={backStep}
                disabled={isFirstStep}
              >
                Back
              </Button>
              <Tooltip
                title={errorsExist ? 'You Must Complete All Fields' : ''}
              >
                <span>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={errorsExist}
                    onClick={nextStep}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </span>
              </Tooltip>
            </Container>
          )
        }
      </Paper>
    </Container>
  );
};

export default SurveyForm;
