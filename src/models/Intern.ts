import Remunerable from './Remunerable';

export default class Intern implements Remunerable {
  id: string
  email: string
  name: string
  salary: number;
  transportationAssistance: number;

  constructor(id: string, name: string, email: string, salary: number, transportationAssistance: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.salary = salary;
    this.transportationAssistance = transportationAssistance; 
  }

  receivePayment(): number {
    return this.salary + this.transportationAssistance;
  }
}
