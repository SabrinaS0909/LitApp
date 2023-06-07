import { findOne } from '../model/User';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const handleLogin = async (req, res) => {
    const { user, pass } = req.body;
    if (!user || !pass) return res.status(400).json({ 'message' : 'Username and password are required.' });
    
    const foundUser = await findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await compare(pass, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = sign(
            { 
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );
        const refreshToken = sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        //Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

export default { handleLogin };