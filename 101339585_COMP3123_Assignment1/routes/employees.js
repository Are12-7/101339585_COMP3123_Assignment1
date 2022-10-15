// Carlos Arellano - 101339585

const express = require('express');
const EmployeeModel = require('../models/Employee');
const router = express.Router();



// Get All employees
router.get('/', async (req, res) => {
    try {
        const employee = await EmployeeModel.find();
        res.status(200).send(employee)
    } catch (error) {
        res.status(500).json({message: 'No Employees Found'})
        
    }
});

//Create New Employee
router.post('/', async (req, res) => {
    const newEmployee = new EmployeeModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:  req.body.email,
        gender: req.body.gender,
        salary: req.body.salary
    });
    try {
        await newEmployee.save();
        res.status(201).send(newEmployee);
        
    } catch (error) {
        res.status(500).send({ message: 'Error while creating new employee' });        
    }
});


// Get Employee By Id
router.get('/:eid', async (req, res) => {
    try {
        console.log(req.body);
        const employeeById = await EmployeeModel.findById(req.params.eid);
        res.status(200).send(employeeById);       
    } catch (error) {
        res.status(500).send({ message: error.message })
    } 
});

//Update Employee By Id
router.put('/:eid', async (req, res) => {
    try {
        console.log(req.body);
        const updateEmployee = await EmployeeModel.findByIdAndUpdate(req.params.eid,req.body);
        const ne = await updateEmployee.save()
        res.status(202).send(ne);        
    } catch (error) {
        res.status(500).send(error);
    }    
});

//Delete Employee By Id
router.delete('/:eid', async (req, res) => {
    try {
        const employee = await EmployeeModel.findByIdAndDelete(req.params.eid);
        if (!employee) {
            res.status(404).send("No employee found");
        }
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send("Employee was not removed");
    }
}
);

module.exports = router;

