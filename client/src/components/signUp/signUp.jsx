import React, { useEffect, useState } from "react";
import Button from "../button/button";
import "./signUp.scss";
import { formValidation } from "../../utils/formValidation";

const SignUp = () => {
  return <div>login</div>;
  // const [formErrors, setFormErrors] = useState({});
  // const [signUpFormValue, setSignUpFormValue] = useState({
  //   name: "",
  //   password: "",
  // });
  // const [isSubmit, setIsSubmit] = useState(false);

  // const validationFields = (e) => {
  //   const { name, value } = e.target;
  //   setSignUpFormValue({ ...signUpFormValue, [name]: value });
  //   setFormErrors(formValidation.asyncformValidation(signUpFormValue));
  // };

  // const signUpFormSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit === true) {
  //     console.log(signUpFormValue);
  //   }
  // }, [formErrors]);
  // return (
  //   <>
  //     <div className="signUp_form">
  //       <form>
  //         <div className="signUp_name_field">
  //           <label htmlFor="signUp_name">Email Address</label>
  //           <input
  //             name="name"
  //             type="text"
  //             placeholder="Enter Your Email Address"
  //             aria-label="Enter Your Email Address"
  //             id="signUp_name"
  //             autoComplete="false"
  //             autoCorrect="false"
  //             autoFocus={false}
  //             onChange={validationFields}
  //           />
  //           <span className="form_error">{formErrors.name}</span>
  //         </div>
  //         <div className="signUp_password_field">
  //           <label htmlFor="signUp_password">Password</label>
  //           <input
  //             name="password"
  //             type="password"
  //             placeholder="Enter Your Password"
  //             aria-label="Enter Your Password"
  //             id="signUp_password"
  //             onChange={validationFields}
  //           />
  //           <span className="form_error">{formErrors.password}</span>
  //         </div>
  //       </form>
  //       <Button className="form_button" onClick={signUpFormSubmit}>
  //         Sign Up
  //       </Button>
  //     </div>
  //   </>
  // );
};
export default SignUp;
