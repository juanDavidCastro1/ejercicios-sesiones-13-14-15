import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PRIORITY from "../../models/priority.enum";
import '../../styles/RegisterTask.css';

function RegisterTask({ createTask }) {
  const initialValues = {
    name: "",
    description: "",
    priority: PRIORITY.NORMAL,
  };

  const resgiterSchema = Yup.object().shape({
    name: Yup.string().required("el nombre es obligatorio"),
    description: Yup.string(),
    priority: Yup.string(),
  });

  return (
    <div className="form-container">
      <h2 className="title__form">Registrar tarea</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createTask(values);
        }}
        validationSchema={resgiterSchema}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="form">
            <label className="form__title" htmlFor="name">Nombre</label>
            <Field
              className="form__input"
              id="name"
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
            />

            {errors.name && touched.name && (
              <ErrorMessage className="form__error" name="name" component="div" />
            )}

            <label className="form__title" htmlFor="description">Descripcion</label>
            <Field
              className="form__input"
              id="description"
              type="textfield"
              name="description"
              placeholder="Ingrese la descripcion"
            />

            <Field
              className="form__select"
              name="priority"
              id="priority"
              component="select"
              default_value={PRIORITY.NORMAL}
            >
              <option className="form__select__option" value={PRIORITY.NORMAL}>Normal</option>
              <option value={PRIORITY.NO_URGENT}>No Urgente</option>
              <option value={PRIORITY.URGENT}>Urgente</option>
            </Field>

            <button className="form__button" type="submit">Registar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterTask;
