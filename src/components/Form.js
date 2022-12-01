import React from "react";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  const { form, updateForm, disabled, setFormErrors, errors, submit } = props;
  const history = useHistory();
  const confirmBtn = () => {
    history.push("/confirmation");
  };

  const change = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    updateForm(name, valueToUse);
  };

  return (
    <div id="pizza-form" className="form">
      <h2 className="firsth2">Build Your Own Pizza</h2>
      <div className="backroundImg"></div>
      <h2 className="secondh2">Build Your Own Pizza</h2>
      <div className="errors">{errors.lname}</div>
      <form onSubmit={submit}>
        <label>
          Last name to keep track of your order
          <input
            onChange={change}
            value={form.lname}
            name="lname"
            type="text"
            placeholder="Last Name"
            id="name-input"
          ></input>
        </label>

        <label>
          Choice of Size (required)
          <select
            onChange={change}
            value={form.size}
            name="size"
            id="size-dropdown"
          >
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">XLarge</option>
          </select>
        </label>

        <label>
          Choice of Sauce (Required)
          <label>
            Original Red
            <input
              onChange={change}
              checked={form.side === "OriginalRed"}
              value="OriginalRed"
              name="side"
              type="radio"
            ></input>
          </label>
          <label>
            Garlic Ranch
            <input
              onChange={change}
              checked={form.side === "GarlicRanch"}
              value="GarlicRanch"
              name="side"
              type="radio"
            ></input>
          </label>
          <label>
            BBQ Sauce
            <input
              onChange={change}
              checked={form.side === "BBQSauce"}
              value="BBQSauce"
              name="side"
              type="radio"
            ></input>
          </label>
          <label>
            Spinach Alfredo
            <input
              onChange={change}
              checked={form.side === "SpinachAlfredo"}
              value="SpinachAlfredo"
              name="side"
              type="radio"
            ></input>
          </label>
        </label>

        <label>
          Add Toppings (Choose up to 4.)
          <label>
            <input
              onChange={change}
              checked={form.pepperoni}
              name="pepperoni"
              type="checkbox"
            ></input>
            Pepperoni
          </label>
          <label>
            <input
              onChange={change}
              checked={form.pineapple}
              name="pineapple"
              type="checkbox"
            ></input>
            Pineapple
          </label>
          <label>
            <input
              onChange={change}
              checked={form.sausage}
              name="sausage"
              type="checkbox"
            ></input>
            Sausage
          </label>
          <label>
            <input
              onChange={change}
              checked={form.bacon}
              name="bacon"
              type="checkbox"
            ></input>
            Bacon
          </label>
        </label>

        <label>
          Special Instructions
          <input
            onChange={change}
            value={form.request}
            name="request"
            type="text"
            id="special-text"
          ></input>
        </label>

        {/* <Link to="/confirmation" className="linkBtn confirmation addorder">
          Order
        </Link> */}

        <button
          className="linkBtn addorder"
          id="order-button"
          disabled={disabled}
          onClick={confirmBtn}
        >
          Order
        </button>
      </form>
    </div>
  );
}
