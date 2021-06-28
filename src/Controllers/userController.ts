const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Schema/user');


exports.signup = (req: any, res: any, next: any) => {
    bcrypt.hash(req.body.userPassword, 10).then(
        (hash: any) => {
            const user = new User({
                userName: req.body.userName,
                userPassword: hash
            });
            user.save().then(
                ()=>{
                    res.status(201).json({
                        message: 'User added successfully!'
                    });
                }
            ).catch(
                (error: any) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};

exports.login = (req: any, res: any, next: any) => {
    User.findOne({userName: req.body.userName}).then(
        (user: any) => {
            if (!user){
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.userPassword, user.userPassword).then(
                (valid: any) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign(
                        {userId: user._id},
                        'SECRET_RANDOM_STRING',
                        {expiresIn: '1h' });
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                (error: any) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error: any) => {
            res.status(500).json({
                error: error
            });
        }
    );
};