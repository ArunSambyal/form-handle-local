import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../redux/formSlice";

const FromComponent = () => {
  const [formValue, setFormValue] = useState({ name: "", email: "" });

  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.form.formValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.name || !formValue.email) {
      alert("please pickup the fonee");
      return;
    }
    dispatch(addFormData(formValue));
    setFormValue({ name: "", email: "" });
    alert("submit");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
      <h1>ReduxToolkit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default FromComponent;
