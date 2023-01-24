import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    gender: "",
    select: "",
    checkbox: "",
  });

  const [records, setRecords] = useState([]);

  const inputEvent = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setFullName({ ...fullName, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...fullName, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);

    setFullName({
      name: "",
      address: "",
      email: "",
      number: "",
      gender: "",
      select: "",
      checkbox: "",
    });
  };
  return (
    <>
      <div className="container justify-content-center d-flex">
        <form className="border p-3 border-primary" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={fullName.name}
            onChange={inputEvent}
            className="form-control"
            autoComplete="off"
            placeholder="Enter Your Name"
          />

          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            name="address"
            value={fullName.address}
            onChange={inputEvent}
            id="address"
            cols="30"
            rows="3"
            className="form-control"
            autoComplete="off"
            placeholder="Enter Address"
          ></textarea>

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={fullName.email}
            onChange={inputEvent}
            className="form-control"
            autoComplete="off"
            placeholder="Enter eMail here"
          />

          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="number"
            name="number"
            value={fullName.number}
            onChange={inputEvent}
            className="form-control"
            autoComplete="off"
            placeholder="Enter Mobile No..."
          />
          <br />

          <div>
            <label htmlFor="gender" className="form-check-label">
              Gender
            </label>
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={inputEvent}
              className="form-check-input"
              autoComplete="off"
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={inputEvent}
              className="form-check-input ms-2"
              autoComplete="off"
            />
            Female
          </div>
          <br />

          <div>
            <select
              name="select"
              id="select"
              value={fullName.select}
              onChange={inputEvent}
              className="form-select"
              autoComplete="off"
            >
              <option>City</option>
              <option>Ahmedabad</option>
              <option>Surat</option>
            </select>
          </div>
          <br />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="checkbox"
              autoComplete="off"
              id="checkbox"
              value="Checked"
              onChange={inputEvent}
            />
            <label htmlFor="checkbox" className="form-check-label">
              I Agree to the company term and policy
            </label>
          </div>
          <br />

          <div className="justify-content-center d-flex">
            <button type="submit" className="btn btn-primary">
              UPDATE
            </button>
          </div>
        </form>
      </div>

      <div className="container">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Number</th>
                <th>Gender</th>
                <th>City</th>
              </tr>
            </thead>
            {records.map((curEle) => {
              return (
                <tbody>
                  <tr>
                    <td>{curEle.name}</td>
                    <td>{curEle.address}</td>
                    <td>{curEle.email}</td>
                    <td>{curEle.number}</td>
                    <td>{curEle.gender}</td>
                    <td>{curEle.select}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        ;
      </div>
    </>
  );
};

export default Form;
