// Define an Employee class with id (number - public), name (string - public), department (string - public), projects (array of Projects - private). __Use the access specifiers in constructor arguments__ to setup the initial values for data members automatically. Define some Employee objects (suggest using sample data below).
// ```
// const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
// const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
// const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
// ```


//Solution:
class Project {
  constructor(public id:number, public name:string, private client:string){
    this.id=id;
    this.name=name;
    this.client=client;
  }
}



class Employee extends Project{
  constructor(public id:number,public name:string,public department : string,public arr:object[]){
    super(id,name,department);
    this.arr=arr;
  }
}
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

console.log(dbsPayroll);
console.log(intranetDeployment);

const john = new Employee( 1, 'John', 'Web Developer IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator Operations', [ intranetDeployment ] );
console.log(john);
console.log(jane);
console.log(mark);
