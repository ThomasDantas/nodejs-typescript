import { Request, Response } from 'express';
import EmailService from '../services/emailService';

const users = [
  {
    user: 'Paulo',
    email: 'paulo@gmail.com',
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Paulo',
        email: 'paulo@gmail.com',
      },
      message: {
        subject: 'Bem vindo',
        body: 'Seja bem vindo',
      },
    });
  },
};
