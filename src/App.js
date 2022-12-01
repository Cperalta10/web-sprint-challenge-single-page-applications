import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import schemaForm from "./validation/schemaForm";
import * as yup from "yup";
import axios from "axios";

const App = () => {
  const [disabled, setDisabled] = useState(true);
  const [form, setForm] = useState({
    lname: "",
    size: "",
    side: "",
    pepperoni: false,
    pineapple: false,
    sausage: false,
    bacon: false,
    request: "",
  });
  const [errors, setErrors] = useState({
    lname: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schemaForm, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const updateForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      user: form.lname.trim(),
      size: form.size,
      side: form.side,
      pepperoni: form.pepperoni,
      sausage: form.sausage,
      bacon: form.bacon,
      request: form.request,
    };
    axios
      .post("https://reqres.in/api/orders", newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    schemaForm.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/pizza">
          <Form
            submit={submit}
            errors={errors}
            setFormErrors={setFormErrors}
            disabled={disabled}
            updateForm={updateForm}
            form={form}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
