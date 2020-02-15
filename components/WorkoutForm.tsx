import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Workout } from '../components/WorkoutList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    }
  }),
);


interface Props {
  onSubmit: (values: Workout) => void;
}

const WorkoutForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();

  const initialValues: Workout = {
    exercise: 'Push Up',
    weight: 0,
    reps: 0,
    unit: 'kg'
  }

  return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values)
        }}
      >{({ values, handleChange, handleBlur }) => (
        <Form>

          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            <Input
              id="standard-adornment-weight"
              value={values.weight}
              type='number'
              onBlur={handleBlur}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">{values.unit}</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
          </FormControl>

          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            <Input
              id="standard-adornment-reps"
              value={values.reps}
              type='number'
              onBlur={handleBlur}
              onChange={handleChange('reps')}
              aria-describedby="standard-reps-helper-text"
              inputProps={{
                'aria-label': 'reps',
              }}
            />
            <FormHelperText id="standard-reps-helper-text">reps</FormHelperText>
          </FormControl>


          <FormControl component="fieldset" >
            <RadioGroup aria-label="unit" name="unit" value={values.unit} onChange={handleChange}>
              <FormControlLabel value="kg" control={<Radio />} label="KG" />
              <FormControlLabel value="lbs" control={<Radio />} label="Lbs" />
            </RadioGroup>
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            <Button variant="contained" type="submit">Submit</Button>
          </FormControl>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
      </Formik>
  )
}

export default WorkoutForm;
