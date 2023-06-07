import { findOne, create } from '../model/User';
import { hash } from 'bcrypt';

const handleNewUser = async (req, res) => {
    const { user, pass } = req.body;
    if (!user || !pass) return res.status(400).json({ 'message': 'Username and password are required.'});
    
    //checks for duplicate usernames in the database
    const duplicate = await findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict
    
    try {
        //encrypt the password
         const hashedPass = await hash(pass, 10);

        // create and store the new user 
        const result = await create({ 
            "username": user, 
            "password": hashedPass
        });
        
        console.log(result);
        
        res.status(201).json({ 'success': `New user ${user} created!`});
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

export default { handleNewUser };