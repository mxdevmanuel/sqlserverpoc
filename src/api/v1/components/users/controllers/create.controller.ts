import { Request, Response } from 'express';
import { User } from '@/entities';
import { UserService } from '@/services';
import { container } from 'tsyringe';

export function create(req: Request, res: Response) {
  const userService = container.resolve(UserService);
  const user = req.body as User;
  userService.addUser(user).then(() => {
    res.sendStatus(201);
  });
}