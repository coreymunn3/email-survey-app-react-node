import React, { useState } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';

const SurveyFormStep = ({ activeStep }) => {
  const isReview = activeStep === 1;
  // for testing...
  const [field, setField] = useState('');

  const FIELDS = [
    { id: 'title', label: 'Survey Title', multiline: false, rows: 0 },
    { id: 'subject', label: 'Subject Line', multiline: false, rows: 0 },
    { id: 'body ', label: 'Email Body', multiline: true, rows: 5 },
    { id: 'recipients', label: 'Recipient List', multiline: true, rows: 1 },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        {FIELDS.map(({ id, label, multiline, rows }) => (
          <Grid item xs={12} key={id}>
            <TextField
              type='text'
              id={id}
              label={label}
              multiline={multiline}
              rows={rows}
              fullWidth
              variant={isReview ? 'filled' : 'outlined'}
              InputLabelProps={{ shrink: true }}
              disabled={isReview}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SurveyFormStep;
