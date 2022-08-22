export class EmployeeModel {
    notes: string = "";
    date: Date;
    department: string = "";
     gender: string = ""
    firstName: string = "";
    lastName: string = "";
    profilePic: string = "";
    salary: number = 3000;
    constructor(notes: string, date: Date, department: string, firstName: string, lastName: string, profilePic: string, salary: number,gender:string) {
        this.date = date;
        this.department = department;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
        this.salary = salary;
        this.notes=notes;
        this.gender=gender;

    }

}