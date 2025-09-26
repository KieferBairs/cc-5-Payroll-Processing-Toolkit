// Coding Challenge 05

// Create an array containing emplyee objects

const employees = [
    {name: "Jimmy", hourlyRate: 25, hoursWorked: 30},
    {name: "Sarah", hourlyRate: 30, hoursWorked: 45},
    {name: "Stefon", hourlyRate: 20, hoursWorked: 20},
    {name: "Alec", hourlyRate: 22, hoursWorked: 25},
    {name: "Gabe", hourlyRate: 18, hoursWorked: 15},
]

// Create function calculating base pay

function calculateBasePay(rate, hours) {
    if (hours > 40) {
        hours = 40;
}
return rate * hours
}

for (const employee of employees) {
    let pay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    console.log(`${employee.name}'s base pay is : $${pay}`);  
}