require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
// new port
const port = 'https://frontend-m6qx.onrender.com';

app.use(express.json());
app.use(cors());

async function connectDB(){
    try{
       // await mongoose.connect('mongodb://localhost:27017/company');
         await mongoose.connect('mongodb+srv://radheyshree098:fczSSFpjlkrrrHLD@cluster0.3e7v2vg.mongodb.net/company?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongoDB database connected');
    }
    catch(error)
    {
        console.error('Fail to connect',error);
        process.exit(1);
    }
}
connectDB();
const employeeSchema= new mongoose.Schema({
    empNo:{ type:Number,required:true},
    empName:{ type:String,required:true,unique:true},
    empSal:{ type:Number,required:true,unique:true},
},
{
    timestamps:false,//also use false if we do not want to see timestamps;
    //versionKey:false
});
const Employee=mongoose.model('Employee',employeeSchema);
//create new employee,method post
app.post('/api/employess',async(req,res)=>{
    try{
        const employee=new Employee(req.body);
        const savedEmployee=await employee.save();//.save method is also bydefault
        //res.status(201).json(savedEmployee);
        res.status(201).json({"message":"Employee Object Saved Successfully..."});

    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

app.get('/api/employess',async(req,res)=>{
    try{
        
        const emp=await Employee.find();
        res.json(emp);
        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});
app.get('/api/employess/:id',async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id);
        if(!employee)
            return res.status(404).json({message:'employee not found'});
            res.json(employee);
        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}) ;
app.delete('/api/employess/:id',async(req,res)=>{
    try{
        const employee=await Employee.findByIdAndDelete(req.params.id);
        if(!employee)
            return res.status(404).json({message:'employee not found'});
        res.json({message:'employee deleted successfully'});
        res.json(employee);
            
        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}) ;
app.put('/api/employess/:id',async(req,res)=>{
    try{
        const updatedEmployee=await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new:true,
                runValidators:true
            }
        
        );
        if(!updatedEmployee)
            return res.status(404).json({message:'employee not found'});
        res.json(updatedEmployee);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

app.listen(port,()=>{
    console.log(`Server is runing on: ${port}`);

});
