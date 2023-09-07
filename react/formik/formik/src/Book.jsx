import React, { useContext } from 'react';
import { Namecontext } from './Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Book.css';
import i1 from './images/i1.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  number: Yup.string().required('ISBN Number is required'),
  selectedDate: Yup.date().required('Date is required'),
});

const Book = () => {
  const { Name, setname} = useContext(Namecontext);

  const initialValues = {
    title: '',
    author: '',
    number: '',
    selectedDate: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    if (
      values.title.trim() === '' ||
      values.author.trim() === '' ||
      values.number.trim() === '' ||
      !values.selectedDate
    ) {
      alert('Please fill in all fields before adding a name.');
      return;
    }

    if (!validationSchema.isValidSync(values)) {
      const validationErrors = Object.values(validationSchema.validateSync(values, { abortEarly: false }));
      const errorMessage = validationErrors.join('\n');
      alert(errorMessage);
      return;
    }

    const newvalue = {
      title: values.title,
      author: values.author,
      number: values.number,
      selectedDate: values.selectedDate,
    };

    const update = [...Name];
    update.push(newvalue);
    setname(update);

    resetForm(initialValues);
  };

  return (
    <div>
      <div className="images">
        <img src={i1} alt="Author Image" />
        <p>
          "Books are not just vessels of ink and paper; they are portals to new
          worlds, repositories of knowledge, and companions on the journey of
          self-discovery."
        </p>
      </div>

      <div className="box">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <div className="inputs">
                <Field type="text" name="title" placeholder="Title" />
                <ErrorMessage name="title" component="div" className="error" />

                <Field type="text" name="author" placeholder="Author" />
                <ErrorMessage name="author" component="div" className="error" />

                <Field type="text" name="number" placeholder="ISBN Number" />
                <ErrorMessage name="number" component="div" className="error" />

                <DatePicker
                  selected={values.selectedDate}
                  onChange={(date) => setFieldValue('selectedDate', date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a Date"
                />
                <ErrorMessage
                  name="selectedDate"
                  component="div"
                  className="error"
                />
              </div>

              <div className="buttons">
                <button type="submit">Add Name</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Book;
