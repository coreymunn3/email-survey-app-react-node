import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import FIELDS from './formFields';

const SurveyFormSteps = ({ isReview, formData, setFormData, errors }) => {
  const emailFormattingErrorExists = !(
    typeof errors.recipientsFormatted === 'undefined'
  );

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
              error={id === 'recipients' && emailFormattingErrorExists}
              helperText={
                id === 'recipients' && emailFormattingErrorExists
                  ? errors.recipientsFormatted
                  : ''
              }
              onChange={handleChange}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SurveyFormSteps;
