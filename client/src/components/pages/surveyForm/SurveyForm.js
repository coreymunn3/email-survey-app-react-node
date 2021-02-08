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
import { useDispatch } from 'react-redux';
import { createSurvey } from '../../../actions/surveyActions';
// util function
import validateForm from '../../../utils/validateForm';

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
  const dispatch = useDispatch();
  // stepper
  const steps = ['Create Survey', 'Review & Submit'];
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isReview = activeStep === 1;
  const isEndState = activeStep === steps.length;
  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);
  // form state & validation
  const [formData, setFormData] = useState({});
  const errorsExist = Object.keys(validateForm(formData)).length > 0;
  // advance or submit the form
  const handleAdvanceStep = () => {
    if (isReview) {
      // submit form
      console.log(formData);
      dispatch(createSurvey(formData));
    }
    nextStep();
  };

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
              isReview={isReview}
              formData={formData}
              setFormData={setFormData}
              errors={validateForm(formData)}
            />
          )
        }
        {
          // conditionally render buttons
          // 1 button if in end state, 2 otherwise
          isEndState ? (
            <Container className={classes.buttonGroup}>
              <Button
                component={Link}
                to='/surveys'
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
                    onClick={handleAdvanceStep}
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
