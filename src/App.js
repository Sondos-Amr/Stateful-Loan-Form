import "./App.css";

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
  return (
    <div className="container-form flex">
      <form className="form flex">
        <label>Name : </label>
        <input type="text" />
        <label>Phone Number : </label>
        <input type="tel" />
        <label>Age :</label>
        <input type="text" />
        <label>Are You an employee ?</label>
        <input type="checkBox" />
        <label>Salary</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
