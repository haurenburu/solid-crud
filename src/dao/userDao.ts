import User from "../models/Intern";

export default interface DAO {
  insert(user: User): User;
  delete(user: User): User | null;
  findAll(): User[];
  findById(id: string): User | null;
  update(user: User): User | null;
}
