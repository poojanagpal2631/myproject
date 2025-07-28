import {useState} from 'react'
import './style/findid.css'
import axios from 'axios'
function FindId(){
    const[id,setID]=useState('');
    const[employee,setEmployee]=useState(null);

    async function getData(e){
        
                e.preventDefault();
                try
                {
                    const response= await axios.get(`http://localhost:3001/api/employess/${id}`);
                    setEmployee(response.data);
             }
                catch(err){
                    setEmployee(null);
                    alert("Employee not found" + err);
                }
     };
    return(
        <div>
            <form className="zamp form-container">  
                <h1 className="bounce">
                    Find employee by id!
                </h1>
                <hr></hr>
                <label>Enter the employee id..</label>
            <input type="text" value={id} onChange={e=>setID(e.target.value)}></input>
            <br></br>
            <button type="submit" onClick={getData}>click me</button>
             {employee && (
                <div>
                    <h4>Employee details</h4>
                    <hr/>
                    <p>Emp no. is {employee.empNo}</p>
                     <p>Emp Name is {employee.empName}</p>
                      <p>Emp salary is {employee.empSal}</p></div>
             )}
                  </form></div>
    )
};
export default FindId;