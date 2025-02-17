import { useState } from "react";
import "./App.css";
import Popup from "./Popup";
function App() {
  return (
    <div className="App flex">
      <div className="container-content flex">
        <h1> Repuestung a Loan </h1>
        <hr />
        <LenoForm />
      </div>
    </div>
  );
}

function LenoForm() {
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

  const [isVisiable, setIsVisiable] = useState(false);
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
          onClick={() => setIsVisiable(true)}
        >
          Submit
        </button>
      </form>
      <Popup isVisiable={isVisiable} />
    </div>
  );
}

export default App;
