// Your code here
function createEmployeeRecord(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName:employeeArray[1],
        title:employeeArray[2],
        payPerHour:employeeArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    };
};
// const newEmployee = createEmployeeRecord(['John','Doe','Engineer',25])
// console.log(newEmployee)

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(createEmployeeRecord);
}

// const employeeData = [
//     ["John", "Doe", "Engineer", 25],
//     ["Jane", "Smith", "Manager", 30],
//     ["Bill", "Gates", "CEO", 100]
//   ];
//   const employees = createEmployeeRecords(employeeData);
//   console.log(employees)

  function createTimeInEvent(employeeRecord,dateStamp){
    const [date,hour] = dateStamp.split(" ");
    employeeRecord.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(hour),
        date :date
    });
  return employeeRecord
  }
//   const employee = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [],
//     timeOutEvents: []
//   };
// const updatedEmployee = createTimeInEvent(employee,"2025-01-08 0900")
// console.log(updatedEmployee)

function createTimeOutEvent(employeeRecord,dateStamp){
    const [date,hour] = dateStamp.split(" ");
    employeeRecord.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(hour),
        date :date
    });
    return employeeRecord
}
//   const employee = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [],
//     timeOutEvents: []
//   };
// const updatedEmployee = createTimeOutEvent(employee,"2025-01-08 1100")
// console.log(updatedEmployee)

function hoursWorkedOnDate(employeeRecord,date){
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOutEvent = employeeRecord.timeOutEvents.find(event =>event.date === date)

    if (!timeInEvent || !timeOutEvent) {
        return 0;
    }
const hoursWorked = (timeOutEvent.hour - timeInEvent.hour)/100;

return hoursWorked
}
// const employee = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [
//       { type: "TimeIn", hour: 900, date: "2025-01-08" },
//       { type: "TimeIn", hour: 830, date: "2025-01-09" }
//     ],
//     timeOutEvents: [
//       { type: "TimeOut", hour: 1700, date: "2025-01-08" },
//       { type: "TimeOut", hour: 1800, date: "2025-01-09" }
//     ]
//   };
  
//   const hoursWorked = hoursWorkedOnDate(employee, "2025-01-09");
//   console.log(hoursWorked);

function wagesEarnedOnDate(employeeRecord,date){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    
    const wagesEarned = (hoursWorked * employeeRecord.payPerHour)
    return wagesEarned
}
// const employee = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [
//       { type: "TimeIn", hour: 900, date: "2025-01-08" },
//       { type: "TimeIn", hour: 830, date: "2025-01-09" }
//     ],
//     timeOutEvents: [
//       { type: "TimeOut", hour: 1700, date: "2025-01-08" },
//       { type: "TimeOut", hour: 1800, date: "2025-01-09" }
//     ]
//   };
//     const wagesEarned = wagesEarnedOnDate(employee, "2025-01-08");
//   console.log(wagesEarned);
  
function allWagesFor(employeeRecord){
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date)

    const totalWages = datesWorked.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, date);
    },0)
    return totalWages
}
// const employee = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [
//       { type: "TimeIn", hour: 900, date: "2025-01-08" },
//       { type: "TimeIn", hour: 830, date: "2025-01-09" }
//     ],
//     timeOutEvents: [
//       { type: "TimeOut", hour: 1700, date: "2025-01-08" },
//       { type: "TimeOut", hour: 1800, date: "2025-01-09" }
//     ]
//   };
  
//   const totalWages = allWagesFor(employee);
//   console.log(totalWages); 

function calculatePayroll(employeeRecords){
    const totalPayroll = employeeRecords.reduce((total, employeeRecord)=> {
    return total + allWagesFor(employeeRecord);
    },0);
return totalPayroll
}

// const employee1 = {
//     firstName: "John",
//     familyName: "Doe",
//     title: "Engineer",
//     payPerHour: 25,
//     timeInEvents: [
//       { type: "TimeIn", hour: 900, date: "2025-01-08" },
//       { type: "TimeIn", hour: 830, date: "2025-01-09" }
//     ],
//     timeOutEvents: [
//       { type: "TimeOut", hour: 1700, date: "2025-01-08" },
//       { type: "TimeOut", hour: 1800, date: "2025-01-09" }
//     ]
//   };
  
//   const employee2 = {
//     firstName: "Jane",
//     familyName: "Smith",
//     title: "Manager",
//     payPerHour: 30,
//     timeInEvents: [
//       { type: "TimeIn", hour: 900, date: "2025-01-08" },
//       { type: "TimeIn", hour: 800, date: "2025-01-09" }
//     ],
//     timeOutEvents: [
//       { type: "TimeOut", hour: 1700, date: "2025-01-08" },
//       { type: "TimeOut", hour: 1600, date: "2025-01-09" }
//     ]
//   };
  
//   const employeeRecords = [employee1, employee2];
//   const totalPayroll = calculatePayroll(employeeRecords);
//   console.log(totalPayroll);  
  