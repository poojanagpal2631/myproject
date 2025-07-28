import {useState} from 'react'
import axios from 'axios'
import './style/index.css'
function DeleteData(){
const [id,setID]=useState('');
    
    async function Delete(e){
        e.preventDefault();
        try{
            const response= await axios.delete(`https://myproject-6hir.onrender.com/api/employess/${id}`);
            alert("data delete successfully");
        }
        catch(err){
            alert("Employee not found" + err);
        }

    };

    return(
        <div>
            <div className="casual form-container">
        <form onSubmit={Delete} >
        <h1 className="bounce">
        Delete record from here!
        </h1><hr/>
        <label>Enter the employye id..</label>
        <input type="text" value={id} onChange={e=>setID(e.target.value)}/>
        <button type="submit">click me</button>
        </form>
        </div>
        </div>
    )
};
export default DeleteData;
