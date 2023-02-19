export const formValidation = {
  emailRegex:
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
  asyncformValidation: function ({ name, password }) {
    let error = {};
    if (!name) {
      error.name = "Email field can't be empty";
    } else if (!this.emailRegex.test(name)) {
      error.name = "Please Enter valid Email Id";
    }
    if (!password) {
      error.password = "Password field can't be empty";
    } else if (password.length < 7) {
      error.password = "Password should be at least 7 characters";
    } else if (password.length > 20) {
      error.password = "Password should be less than 20 characters";
    }
    return error;
  },
};
