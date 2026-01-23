"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  employee: {
    id: string;
    fullname: string;
    position: string;
    age: string;
  };
};

const EditForm = ({ employee }: Props) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: employee.id,
      fullname: employee.fullname,
      position: employee.position,
      age: employee.age,
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Fullname required"),
      position: Yup.string().required("position required"),
      age: Yup.string().required("age required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          id="fullname"
          placeholder="Enter the fullname"
          {...formik.getFieldProps("fullname")}
        />
        {formik.errors.fullname && formik.touched.fullname ? (
          <div className="alert alert-warning" role="alert">
            {formik.errors.fullname}
          </div>
        ) : null}
        <input
          type="text"
          className="form-control mb-3"
          id="position"
          placeholder="Enter the position"
          {...formik.getFieldProps("position")}
        />
        {formik.errors.position && formik.touched.position ? (
          <div className="alert alert-warning" role="alert">
            {formik.errors.position}
          </div>
        ) : null}
        <input
          type="text"
          className="form-control mb-3"
          id="age"
          placeholder="Enter the age"
          {...formik.getFieldProps("age")}
        />
        {formik.errors.age && formik.touched.age ? (
          <div className="alert alert-warning" role="alert">
            {formik.errors.age}
          </div>
        ) : null}
        <button type="submit" className="btn btn-primary mb-3">
          Edit Employee
        </button>
      </form>
    </>
  );
};

export default EditForm;
