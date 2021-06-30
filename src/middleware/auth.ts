const MWjwt = require('jsonwebtoken');

module.exports = (req: any, res: any, next: any) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = MWjwt.verify(token, 'SECRET_RANDOM_STRING');
        const id_user = decodedToken.id_user;
        const role_user = decodedToken.role_user;
        if (req.body.id_user && req.body.id_user !== id_user) {
            throw 'Invalid user ID';
        }
        else if (req.body.role && req.body.role_user !== role_user) {
            throw 'You are not authorized to make this request';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};