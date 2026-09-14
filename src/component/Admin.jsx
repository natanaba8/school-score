import { useState } from "react";


function Admin({ users, setUsers, results }) {
  const [ form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    role: "Teacher",
    teacherId: "",
  });

  const teachers = users.filter((user) => user.role === "Teacher");
  const students = users.filter((user) => user.role === "Student");

  function handleChange(event){
    setForm({
        ...form, [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event){
    event.preventDefault();

    const newUser = {
        id: Date.now(),
        name: form.name,
        username: form.username,
        password: form.password,
        role: form.role,
    };

    if (form.role === "Teacher"){
        newUser.subjects = ["Physics", "Chemistry"];
    }
    if(form.role === "Student"){
        newUser.teacherId = Number(form.teacherId);
    }

    setUsers([...users, newUser]);

    setForm({
        name: "",
    username: "",
    password: "",
    role: "Teacher",
    teacherId: "",
    });
  }

  return(
    <><div>
          <h2>Dashboard Administrator</h2>
          <div className="summary-card">
              <h3>Teachers</h3>
              <p>{teachers.length}</p>
          </div>

          <div className="summary-card">
              <h3>Students</h3>
              <p>{students.length}</p>
          </div>

          <div className="summary-card">
              <h3>Results</h3>
              <p>{results.length}</p>
          </div>
      </div>
      <section className="admin-panel">
              <h2>Register Users</h2>
              <form className="admin-form" onSubmit={handleSubmit}>
                  <div>
                  <label>Name:</label>
                  <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange} />
                      </div>
                  <div>
                  <label>Username:</label>
                  <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange} />
                  </div>
                  <div>
                  <label>Password:</label>
                  <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange} />
                  </div>
                  <div>
                  <label>Role:</label>
                  <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                  >
                      <option value="Teacher">Teacher</option>
                      <option value="Student">Student</option>
                  </select>
                    </div>

                  {form.role === "Student" && (
                      <div>
                          <label>Teacher ID:</label>
                          <select
                              //type="number"
                              name="teacherId"
                              value={form.teacherId}
                              onChange={handleChange} 
                              required >
                                <option value="">Select Teachers</option>

                                {teachers.map((teacher) => (
                                    <option key={teacher.id} value={teacher.id}>
                                        {teacher.name}
                                    </option>
                                ))}
                          </select>
                      </div>
                  )}
                  <button type="submit">Register</button>
              </form>
          </section>

          <section className="admin-panel">
            <h2>User Registration</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Assign Teacher</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </table>

          </section>
          </>
  )

}

export default Admin;