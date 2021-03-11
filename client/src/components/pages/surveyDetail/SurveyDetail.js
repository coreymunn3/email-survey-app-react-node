import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Divider,
  CircularProgress,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentSurvey } from '../../../actions/surveyActions';
import { motion } from 'framer-motion';
import containerVariants from '../pageTransitions';

const useStyles = makeStyles({
  spacing: {
    paddingTop: '2rem',
  },
  clearBottom: {
    marginBottom: '2rem',
  },
  fullScreenProgress: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SurveyDetail = ({
  match: {
    params: { id: dynamicId },
  },
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSurvey(dynamicId));
  }, []);
  const { loading, current } = useSelector((state) => state.surveys);
  const classes = useStyles();

  const chartData = [
    { response: 'Yes', value: current.yes },
    { response: 'No', value: current.no },
  ];

  return (
    <Container
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {loading ? (
        <div className={classes.fullScreenProgress}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <div>
          <Typography variant='h4' className={classes.spacing} gutterBottom>
            {current.title}
          </Typography>
          <Divider className={classes.clearBottom} />
          <Typography>Subject: {current.subject}</Typography>
          <Typography color='textSecondary' variant='body2'>
            Sent: {new Date(current.dateSent).toLocaleDateString()}
          </Typography>
          <Typography>Body: {current.body}</Typography>
          <br></br>
          <Typography variant='h5'>Result</Typography>
          <div>
            <ResponsiveContainer width='75%' height={200}>
              <BarChart data={chartData}>
                <XAxis dataKey='response' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='value' fill='#3f51b5' />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Typography variant='h5'>Responses</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Responded</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {current.recipients.map((recipient) => (
                  <TableRow key={recipient._id}>
                    <TableCell>{recipient.email}</TableCell>
                    <TableCell>{recipient.responded ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </Container>
  );
};

export default SurveyDetail;
