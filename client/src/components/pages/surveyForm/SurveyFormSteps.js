import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';

const SurveyFormSteps = ({ activeStep, formData, setFormData, errors }) => {
  const isReview = activeStep === 1;

  const FIELDS = [
    { id: 'title', label: 'Survey Title', multiline: false, rows: 0 },
    { id: 'subject', label: 'Subject Line', multiline: false, rows: 0 },
    { id: 'body', label: 'Email Body', multiline: true, rows: 5 },
    { id: 'recipients', label: 'Recipient List', multiline: true, rows: 1 },
  ];

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
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
              required
              variant={isReview ? 'filled' : 'outlined'}
              InputLabelProps={{ shrink: true }}
              disabled={isReview}
              value={formData[id] || ''}
              onChange={handleChange}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SurveyFormSteps;
