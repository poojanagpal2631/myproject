import { useState } from 'react';
import axios from 'axios';
import './style/Find.css';

function Find() {
  const [employees, setEmployees] = useState([]);

  async function findHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/api/employess');
      setEmployees(response.data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="form-table-wrapper">
      <form className="assume" onSubmit={findHandler}>
        <h3 className="find-form bounce">Find all records from here!</h3>
        <hr />
        <button className="find-button" type="submit">Submit</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>EmpId</th>
            <th>EmpNo</th>
            <th>EmpName</th>
            <th>EmpSalary</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.length > 0 ? (
              employees.map(emp => (
                <tr key={emp._id}>
                  <td>{emp._id}</td>
                  <td>{emp.empNo}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.empSal}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No records found</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Find;
