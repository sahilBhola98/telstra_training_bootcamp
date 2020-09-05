import Project from './project.js'
export class Employee extends Project{
  constructor(id,name,department,projects){
    super(id,name,department);
    this.projects=projects;
  }
}
