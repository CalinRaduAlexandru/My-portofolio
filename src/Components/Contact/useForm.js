import { useState, useEffect } from "react";
import { db } from "../../Firebase";

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contact").add({
      name: values.name,
      email: values.email,
      message: values.message,
      date: new Date(),
    });

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
