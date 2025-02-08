import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      <hr />
      <LenoForm />
    </div>
  );
}

function LenoForm() {
  return (
    <div className="container-form">
      <form className="form">
        <label>Name : </label>
        <input type="text" placeholder="Name" />
        <label>Phone Number : </label>
        <input type="phone" placeholder="Phone" />
        <label>Age :</label>
        <input type="number" />
        <label>Are You an employee ?</label>
        <input type="checkBox" />
        <label>Salary</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
