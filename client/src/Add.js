import {useState} from 'react'
import axios from 'axios'

import './style/Login.css';

function Add(){
    const [empNo,setEmpNo]= useState();
    const [empName,setEmpName]= useState();
    const [empSal,setEmpSal]= useState();
    
            async function addHandler(e)
               {
                e.preventDefault();
                try
                {
                    const response= await axios.post('http://localhost:3001/api/employess',{empNo,empName,empSal});
                    //alert(JSON.stringify(response.data,null,2));
                    alert(response.data.message);

                }
                catch(err){
                    alert(err);
                }
               };
             
                   return(
        <div className="login-container-fluid mt-4 form-container"> 
            
            <form className="login-form" onSubmit={addHandler}>
            <h1 className="bounce">Add Information!</h1>
            <hr/>
        
            <p><b>Enter the EmployeeNo.</b></p>
            <input type="text"  className="login-input"  value={empNo} onChange={e => setEmpNo(e.target.value)}/>
    
            <p><b>Enter the Employee Name</b></p>
            <input type="text" className="login-input" value={empName} onChange={e => setEmpName(e.target.value)}/>
            
             <p><b>Enter the Employee Salary</b></p>    
            <input type="text"  className="login-input" value={empSal} onChange={e => setEmpSal(e.target.value)}/>
            

             <button type="submit" className= "login-button"  >submit</button>  

             </form>  
                   
        </div>
       
        
    
    )

}
export default Add;
