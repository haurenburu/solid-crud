import DAO from '../dao/userDao';
import User from '../models/Intern';

export default class UserRepository {
  private dao: DAO;

  // Dependency Inversion Principle
  constructor(userDAO: DAO) {
    this.dao = userDAO;
  }

  public insert(user: User): User {
  return this.dao.insert(user);
  }

  public delete(user: User): User | null {
    return this.dao.delete(user);
  }

  public findAll(): User[] {
    return this.dao.findAll();
  }

  public findById(id: string): User | null {
    return this.dao.findById(id);
  }

  public update(user: User): User | null {
    return this.dao.update(user);
  }
}
