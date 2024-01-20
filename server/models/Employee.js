const mongoose =require('mongoose')
// Define the schema for the Employee model
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create the EmployeeModel using the defined schema
const EmployeeModel = mongoose.model("employees", EmployeeSchema);

// Export the EmployeeModel to be used in other parts of the application
module.exports = { EmployeeModel };
