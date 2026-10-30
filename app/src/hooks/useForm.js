import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => setValues({ ...values, [e.target.id]: e.target.value });
  const reset = () => setValues(initialValues);
  return [values, handleChange, reset];
}