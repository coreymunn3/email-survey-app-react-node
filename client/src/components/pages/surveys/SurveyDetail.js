import React, { useEffect, Fragment } from 'react';
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
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentSurvey } from '../../../actions/surveyActions';

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

  const sampleData = { name: 'response', yes: 100, no: 50 };

  return (
    <Container>
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
          {/* <ResponsiveContainer width='100%' height='200px'>
            <BarChart data={sampleData} width={100} height={100}>
              <XAxis />
              <YAxis />
              <Bar dataKey='yes' />
              <Bar dataKey='No' />
            </BarChart>
          </ResponsiveContainer> */}
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
