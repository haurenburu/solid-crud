import User from '../models/Intern';
import DAO from './userDao';


// Patterns and principles are great things, 
// but used incorrectly they can make a simple problem just as complex as not having them.
// SRP shouldn't be understood in a strict manner. One object should have very few responsibilities, 
// not "one". Here CustomerDao is only responsible for Customer persistence, so it has only one responsibility.

class MemoryUserDAO implements DAO {
  private users: User[]; 

  constructor() {
    this.users = [];
  }
  
  public insert(user: User): User {
    this.users.push(user);
    return user;
  }

  public delete(user: User): User | null {
    let removedUser: User | null = null; 
    this.users = this.users.filter(u => {
      if (user.id === u.id) {
        removedUser = u;
        return true;
      }
      return false; 
    });
    return removedUser;
  }
  
  public findAll(): User[] {
    return [ ...this.users ];
  }

  public findById(id: string): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  public update(user: User): User | null {
    const userFound = this.users.find(({id}) => id === user.id) || null;
    if (userFound) {
      userFound.email = user.email;
      userFound.name = user.name;
    } 
    return userFound;
  }
}

export default MemoryUserDAO;
