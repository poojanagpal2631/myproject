import { NavLink,Route,Routes } from "react-router-dom"
import React from 'react'
import './style/App.css'
import Add from './Add'
import Update from './Update'
import Find from './Find'
import Findid from './FindId'
import DeleteData from './DeleteData'
function App(){
    return(
        <div>
            <h2 className="zoom-in-text">
             Employee Management System!
                </h2>
                <hr/>
                <nav>
                    
                    <NavLink className="btn btn-primary" to={"/Add"}>Add</NavLink>
                     <NavLink  className="btn btn-secondary"to={"/Update"}>Update</NavLink>
                      <NavLink  className="btn btn-info"to={"/Find"}>Find</NavLink>
                       <NavLink  className="btn btn-success"to={"/FindId"}>FindId</NavLink>
                        <NavLink  className="btn btn-danger"to={"/DeleteData"}>DeleteData</NavLink>
                </nav>
                <Routes>
                    <Route path="/Add" element={<Add/>}/>
                    <Route path="/Update" element={<Update/>}/>
                    <Route path="/Find" element={<Find/>}/>
                    <Route path="/FindId" element={<Findid/>}/>
                    <Route path="/DeleteData" element={<DeleteData/>}/>

                </Routes>
                
                    
                
        </div>
    )
};
export default App;