// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../Schema/user');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Users, UsersInterface } from '../models/users';
import { Request, Response } from 'express';

export class ConnectionService {
  public register(req: Request, res: Response) {
    bcrypt.hash(req.body.password, 10).then((hash: any) => {
      const params: UsersInterface = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email, // userName
        password: hash,
        numstreet: req.body.numstreet,
        street: req.body.street,
        points: 0,
        sponsor: 0,
        sponsorised: 0,
        token: '0',
      };

      Users.create(params)
        .then(() => {
          res.status(201).json({
            message: 'User added successfully!',
          });
        })
        .catch((error: Error) => {
          res.status(400).json({
            error: error,
          });
        });
    });
  }

  public login(req: Request, res: Response) {
    Users.findOne({ where: { email: req.body.email } })
      .then((userData: any) => {
        const user = userData.dataValues;
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!'),
          });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid: any) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!'),
              });
            }
            const token = jwt.sign(
              { id_user: user.id_user },
              'SECRET_RANDOM_STRING',
              {
                expiresIn: '1h',
              }
            );
            Users.update(
              { token: token },
              { where: { id_user: user.id_user } }
            ).then(() =>
              res.status(200).json({
                id_user: user._id,
                token: token,
              })
            );
          })
          .catch((error: any) => {
            res.status(500).json({
              error: error,
            });
          });
      })
      .catch((error: any) => {
        res.status(500).json({
          error: error,
        });
      });
  }
}