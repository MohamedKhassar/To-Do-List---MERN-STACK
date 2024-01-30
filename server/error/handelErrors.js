const handelErrors = (err) => {
  const errors = {
    title: "",
    priority: "",
    created_by: "",
    deadline: "",
  };
  if (err.errors) {
    Object.values(err.errors).forEach((error) => {
      if (error.message.includes("Cast to date failed for value")) {
        errors.deadline = "please enter a valid date";
      } else {
        errors[error.path] = error.message;
      }
    });
  }
  return errors;
};

module.exports = handelErrors;
