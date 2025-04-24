import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

function EditStudent() {
  const [userForm, setUserForm] = useState({
    studentname: "",
    fathername: "",
    email: "",
    schoolname: "",
    rollno: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/students/update-student/"+ params.id, {
        studentname: userForm.studentname,
        fathername: userForm.fathername,
        email: userForm.email,
        schoolname: userForm.schoolname,
        rollno: userForm.rollno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/student-list");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/get-student/" + params.id)
      .then((res) => {
        setUserForm({
          studentname: res.data.data.studentname,
          fathername: res.data.data.fathername,
          email: res.data.data.email,
          schoolname: res.data.data.fathername,
          rollno: res.data.data.rollno,
        });
      });
  }, []);

  return (
    <div className="container col-md-6">
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
        <div className="mb-3">
            <label className="form-label">student Name</label>
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
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button type="cancle" className="btn btn-danger" style={{marginLeft:50}}>Cancle</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
