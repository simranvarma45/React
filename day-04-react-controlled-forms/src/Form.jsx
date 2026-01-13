import { useState } from "react";
import "./Form.css";

export function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  }

  const nameError = touched.name && form.name.trim() === "";
  const emailError =
    touched.email && !form.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true
    });

    if (nameError || emailError) return;

    console.log("Submitted data:", form);

    setForm({ name: "", email: "" });
    setTouched({ name: false, email: false });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>User Form</h2>

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {nameError && <p className="error">Name is required</p>}
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {emailError && (
          <p className="error">Enter a valid email</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
