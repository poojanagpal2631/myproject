require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

connectDB();

// Employee schema
const employeeSchema = new mongoose.Schema(
  {
    empNo: {
      type: Number,
      required: true
    },
    empName: {
      type: String,
      required: true,
      unique: true
    },
    empSal: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: false
  }
);

// Model
const Employee = mongoose.model('Employee', employeeSchema);

// Routes

// CREATE employee
app.post('/api/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ all employees
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ single employee
app.get('/api/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE employee
app.put('/api/employees/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({
      message: 'Employee deleted successfully',
      employee: deletedEmployee
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server start (Render compatible)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
