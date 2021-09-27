import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      emailError.innerHTML = "";
      pswError.innerHTML = "";

      if (!values.email) {
        emailError.innerHTML = "Field required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        emailError.innerHTML = "Username should be an email";
      }
      if (!values.password) {
        pswError.innerHTML = "Field required";
      } else {
        alert("Login Successful");
        // Reset to `initialValues`
        formik.resetForm();
        emailError.innerHTML = "";
        pswError.innerHTML = "";
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div id="emailError"></div>

      <label htmlFor="password">Password</label>
      <input
        id="pswField"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div id="pswError"></div>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
