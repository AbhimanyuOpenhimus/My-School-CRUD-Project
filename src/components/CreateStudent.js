import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [userForm, setUserForm] = useState({
    studentname: "",
    fathername: "",
    email: "",
    schoolname: "",
    rollno: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          studentname: "",
          fathername: "",
          email: "",
          schoolname: "",
          rollno: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="container mt-5 col-md-6">
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="studentname"
              id="studentname"
              value={userForm.studentname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Father's Name</label>
            <input
              type="text"
              className="form-control"
              name="fathername"
              id="fathername"
              value={userForm.fathername}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">School Name</label>
            <input
              type="text"
              className="form-control"
              name="schoolname"
              id="schoolname"
              value={userForm.schoolname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll no.</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3 ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="cancle" className="btn btn-danger" style={{marginLeft:50}}>Cancle</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
