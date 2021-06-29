const MWjwt = require('jsonwebtoken');

module.exports = (req: any, res: any, next: any) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = MWjwt.verify(token, 'SECRET_RANDOM_STRING');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};