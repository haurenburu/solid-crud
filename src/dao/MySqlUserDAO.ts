import User from "../models/Intern";
import DAO from "./userDao";

class MySqlUserDAO implements DAO {
  insert(user: User): User {
    throw new Error("Method not implemented.");
  }
  delete(user: User): User | null {
    throw new Error("Method not implemented.");
  }
  findAll(): User[] {
    throw new Error("Method not implemented.");
  }
  findById(id: string): User | null {
    throw new Error("Method not implemented.");
  }
  update(user: User): User | null {
    throw new Error("Method not implemented.");
  }
}

export default MySqlUserDAO;
