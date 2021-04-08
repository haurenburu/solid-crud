import Remunerable from './Remunerable';

export default class Employee implements Remunerable {
  id: string;
  email: string;
  name: string;
  salary: number;
  totalOfTaxes: number;

  constructor(id: string, name: string, email: string, salary: number, totalOfTaxes: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.salary = salary;
    this.totalOfTaxes = totalOfTaxes; 
  }

  receivePayment(): number {
    return this.salary - this.totalOfTaxes;
  }
}

