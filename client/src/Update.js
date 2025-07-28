import {useState} from 'react'
import axios from 'axios'
import './style/Add.css'

 function Update(){
  const [id,setEmpId]= useState('');
  const[empNo,setEmpNo]=useState('');
  const[empName,setEmpName]=useState('');
  
  const[empSal,setEmpSal]=useState('');
  

     

  async function Updatedata(e){
        e.preventDefault();
        try{
            const response= await axios.put(`http://localhost:3001/api/employess/${id}`,{empNo,empName,empSal});
            alert("data updated successfully");
        }
        catch(err){
            alert("Employee not found" + err);
        }

    };

        return(
          <div>
            <div className="container form-container"> 
        
            <form className="form" onSubmit={Updatedata} >
            <h1  className="bounce">Update Information!</h1>
            <hr/>
        
            <p><b>Enter the Employee Id</b></p>
            <input type="text"  className="input" value={id} onChange={e => setEmpId(e.target.value)}/>
     

             <p><b>Enter the updated employee no.</b></p>
            <input type="text"  className="input" value={empNo} onChange={e => setEmpNo(e.target.value)} />
    
            <p><b>Enter the updated employee Name</b></p>
            <input type="text" className="input" value={empName} onChange={e => setEmpName(e.target.value)} />
            
             <p><b>Enter the updated employee Salary</b></p>    
            <input type="text"  className="input" value={empSal} onChange={e => setEmpSal(e.target.value)} />
            

             <button type="submit" className= "login-button"  >submit</button>  

             </form>  
                   
        </div> 
    </div>
    )
};
export default Update;
             
                  





        
        
        

             
                  

