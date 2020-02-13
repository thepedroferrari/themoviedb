import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const WorkoutForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >{({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button variant="contained" type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
    )}
    </Formik>
  )
}

export default WorkoutForm;
