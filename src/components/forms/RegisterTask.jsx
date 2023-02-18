import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PRIORITY from "../../models/priority.enum";

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
    <div>
      <h2>Registrar tarea</h2>
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
          <Form>
            <label htmlFor="name">Nombre</label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
            />

            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div" />
            )}

            <label htmlFor="description">Descripcion</label>
            <Field
              id="description"
              type="text"
              name="description"
              placeholder="Ingrese la descripcion"
            />

            <Field
              name="priority"
              id="priority"
              component="select"
              default_value={PRIORITY.NORMAL}
            >
              <option value={PRIORITY.NORMAL}>Normal</option>
              <option value={PRIORITY.NO_URGENT}>No Urgente</option>
              <option value={PRIORITY.URGENT}>Urgente</option>
            </Field>

            <button type="submit">Registar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterTask;
