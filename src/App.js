import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  function handleDevClick() {
    if (isVisible) {
      setIsVisible(false);
    }
  }

  return (
    <div className="App flex" onClick={handleDevClick}>
      <div className="container-content flex">
        <h1> Repuestung a Loan </h1>
        <hr />
        <LenoForm setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
    </div>
  );
}

function LenoForm({ setIsVisible, isVisible }) {
  const [formInput, setFormInput] = useState({
    name: "",
    tel: "",
    age: "",
    isEmployee: false,
    salary: "",
    isDisabled: true,
  });

  function handleInputChange(e) {
    const { name, checked, type, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const btnDisabled =
    formInput.name.trim() === "" ||
    formInput.tel.trim() === "" ||
    formInput.age.trim() === "";

  const [errorMessage, setErrorMessage] = useState(null);
  function handleSubmitClick() {
    setIsVisible(true);
    const { age } = formInput;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    }
  }

  return (
    <div className="container-form flex" onSubmit={(e) => e.preventDefault()}>
      <form className="form flex">
        <label>Name : </label>
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleInputChange}
        />
        <label>Phone Number : </label>
        <input
          name="tel"
          type="tel"
          value={formInput.tel}
          onChange={handleInputChange}
        />
        <label>Age :</label>
        <input
          name="age"
          type="text"
          value={formInput.age}
          onChange={handleInputChange}
        />
        <label>Are You an employee ?</label>
        <input
          name="isEmployee"
          type="checkbox"
          checked={formInput.isEmployee}
          onChange={(e) =>
            setFormInput({ ...formInput, isEmployee: e.target.checked })
          }
        />
        <label>Salary</label>
        <select
          name="salary"
          value={formInput.salary}
          onChange={handleInputChange}
        >
          <option>$1000</option>
          <option>$2000</option>
          <option>$3000</option>
        </select>
        <button
          className={btnDisabled ? "disabled" : "form-btn"}
          disabled={btnDisabled}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <Popup isVisible={isVisible} errorMessage={errorMessage} />
    </div>
  );
}

export default App;
