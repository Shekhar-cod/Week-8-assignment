// Creating a menu app as seen in this week's video.
// what you create is up to you as long as it meets the following requirements:
//. Use at least one array.
//. Use at least two classes
//. your menu should have the options to create, view, and delete elements.


// Employee class to represent each item in the menu.

class Employee {
    constructor(name, contact, position) {
        this.name = name;
        this.contact = contact;
        this.position = position;
    }
//describe method to give some information about Employee.
    describe() {
        return `${this.name} whose contact number is ${this.contact} is in${this.position} position.`;

    }
}

// Department class to manage the Employee with array so that 
//it hold all the employee in the same Department.

class Department {
    constructor(name) {
        this.name = name;
        this.Employees = [];
    }
   //Adding a new item to the menu
    addemloyee(Employee) {
    //checking if the employee belongs to the employee class by instanceof method
        if (Employee instanceof Employee) {
            this.Employees.push(Employee);
        } else {
            throw new Error(`You can only add an instance of employee. Argument is not a employee: $(employee)`);

        }
    }
// describe method give the information about employee.
    describe() {
        return `${this.name} has ${this.Employees.length} employees.`;
    }
}
//adding menu class which drive our all application and choices.
class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null;
    }
// this is the Entry point of our application, and method below build the application.
    start() {
        // showMainMenuOptions return the selection that user gives us.
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
         //while user have excedding (selection != 0) we need to determine what they selected and do based on it.

            switch (selection) {
                case '1':
                    this.createDepartment();
                    break;
                case '2':
                    this.viewDepartment();
                    break;
                case '3':
                    this.deleteDepartment();
                    break;
                default:
                    selection = 0;    
            }
            selection = this.showMainMenuOptions();
        }
// whem user select 0 the user will be out of the menu.
        alart('Goodbye!');
    }
//Adding showMainMenuOption whcih return prompt. prompt is the pop up box that comes up and ask user for input.
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new department
        2) view department
        3) delete department
        `);

    }

    showDepartmentMenuOptions(departmentinfo) {
        return prompt(`
        0) back
        1) create employee
        2) delete employee
        .....................
        ${departmentinfo}
        `);
    }

    displayDepartments() {
        let departmentString = '';
        //we put Blank string over here as we need to build the string which have all the information for the department. so that we can put message box or prompt.
        for (let i = 0; i < this.departments.length; i++) {
           departmentString += i + `) ` + this.departments[i].name + `\n`;

        }
        alart(departmentString);//this help us to able to see all the department.
    }
//After createDeparment we will be able dispaly the prompt.
    createDepartment() {
        let name = prompt('Enter name for new department:');
        this.departments.push(new Department(name));

    }
    viewDepartment() {
        let index = prompt('Enter the index of the department you with to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department Name: ' + this.selectedDepartment.name + '\n';

            for (let i = 0; i < this.selectedDepartment.players.length; i++) {
                description += i + ') ' + this.selectedDepartment.Employee[i].name
                + ' - ' + this.selectedDepartment.Employees[i].position + '\n';
            }

            let selection = this.showDepartmentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createmployee();
                    break;
                case '2':
                    this.deleteemployee();
            }


        }
    }


} 

let menu = new Menu();
menu.start();