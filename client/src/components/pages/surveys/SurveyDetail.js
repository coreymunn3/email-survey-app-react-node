import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentSurvey } from '../../../actions/surveyActions';

const SurveyDetail = ({
  match: {
    params: { id: dynamicId },
  },
}) => {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(fetchCurrentSurvey(dynamicId));
  }, []);
  console.log(surveys.current);
  return (
    <Container>
      <h1>This is survey detail</h1>
    </Container>
  );
};

export default SurveyDetail;
