import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Namecontext } from './Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import i2 from './images/i2.png';
import './Author.css'; // Import your CSS file for styling
import './Book.css'

const Author = () => {
  const { Author, setauthor } = useContext(Namecontext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    bio: Yup.string().required('Bio is required'),
    birthdate: Yup.date().nullable().required('Birthdate is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      bio: '',
      birthdate: null,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      let newvalue = {
        name: values.name,
        bio: values.bio,
        birthdate: values.birthdate,
      };

      let update = [...Author];
      update.push(newvalue);
      setauthor(update);

      resetForm();
    },
  });

  return (
    <>

    <div className="images">
        <img src={i2} alt="Author Image" />
        <p>
        "Authors are the alchemists of words, turning thoughts into gold on the pages of human experience."
        </p>
      </div>


    <div className="author-container">
      <div className="author-header">
        <h2 className="author-title">Author Form</h2>
      </div>

      <form onSubmit={formik.handleSubmit} className="author-form">

        {/* inputs fields */}

        <div className="input-group">
          <label className="input-label" htmlFor="name"> Name:</label>
          <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} className="input-field"
            placeholder="Enter author name"/>
          {formik.errors.name && <p className="error">{formik.errors.name}</p>}
        </div>


        <div className="input-group">
          <label className="input-label" htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio" value={formik.values.bio} onChange={formik.handleChange} className="textarea-field"
            placeholder="Enter author bio"/>
          {formik.errors.bio && <p className="error">{formik.errors.bio}</p>}
        </div>


        <div className="input-group">
          <label className="input-label" htmlFor="birthdate"> Birthdate:</label>
          <DatePicker
            id="birthdate"
            selected={formik.values.birthdate}
            onChange={(date) => formik.setFieldValue('birthdate', date)}
            className="input-field"
            placeholderText="Select author birthdate"
          />
          {formik.errors.birthdate && <p className="error">{formik.errors.birthdate}</p>}
        </div>


        <div className="buttons">
          <button type="submit" className="submit-button"> Add Author </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Author;
