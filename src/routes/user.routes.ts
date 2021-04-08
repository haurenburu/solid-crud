import express, { Router } from "express";
import MemoryUserDAO from "../dao/MemoryUserDAO";
import UserRepository from "../repositories/UserRepo";
import { uuid } from 'uuidv4';

const router = Router()
const repository = new UserRepository(new MemoryUserDAO());

router.get('/', (req, res) => {
  return res.json(repository.findAll());
});

router.put('/:user_id', (req, res) => {
    const userFound = repository.findById(req.params.user_id);
    if (userFound === null) {
      return res.sendStatus(404);
    } else {
      const {
        email,
        name,
      } = req.body;
      const userUpdated = repository.update({
        id: userFound.id,
        email,
        name,
      });
      return res.json(userUpdated);
    }
});

router.post('/', (req, res) => {
  const {
    email,
    name,
    password
  } = req.body;
  
  if (!email || !name) {
    return res.status(403).json({ error: 'Missing parameters' });
  }
  
  repository.insert({
    email,
    name,
    id: uuid()
  })
});

router.delete('/:id', (req, res) => {
    const userFound = repository.findById(req.params.user_id);
    if (userFound === null) {
        return res.sendStatus(404);
    } else {
        return repository.delete(userFound)
    }
});

export default router;
