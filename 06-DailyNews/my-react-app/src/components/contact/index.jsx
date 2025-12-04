import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const dispathch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry,email is required")
        .email("This email is invalid"),
      firstname: Yup.string().required("Sorry,Firstname is required"),
      lastname: Yup.string().required("Sorry,Lasttname is required"),
      message: Yup.string()
        .required("Sorry,message is required")
        .max(500, "Sorry,the message is to long"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  return (
    <>
      <h1>Contact</h1>
      <form className="mt-3" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            name="emfirstnameail"
            placeholder="Enter your firstname"
            {...formik.getFieldProps("firstname")}
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <Alert variant="danger">{formik.errors.firstname}</Alert>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Enter your lastname"
            {...formik.getFieldProps("lastname")}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <Alert variant="danger">{formik.errors.lastname}</Alert>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="form-control"
            name="lastname"
            rows={3}
            placeholder="Enter your message"
            {...formik.getFieldProps("message")}
          />
          {formik.errors.message && formik.touched.message ? (
            <Alert variant="danger">{formik.errors.message}</Alert>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
