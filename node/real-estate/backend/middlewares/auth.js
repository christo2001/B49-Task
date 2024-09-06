import jwt from 'jsonwebtoken';
import { getuserbyid } from '../controllers/agent.js';  // This function fetches user by ID

const isauthorized = async (req, res, next) => {
    let token;
    if (req.headers) {
        try {
            // Get token from headers
            token = req.headers['x-auth-token'];
            if (!token) {
                return res.status(401).json({ error: 'No token, authorization denied' });
            }

            // Verify token
            const decode = jwt.verify(token, process.env.SECRET_KEY);

            // Attach agent details to the request object
            req.agent = await getuserbyid(decode.id);
            if (!req.agent) {
                return res.status(404).json({ error: 'Agent not found' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ error: 'Token is not valid' });
        }
    } else {
        return res.status(400).json({ error: 'No token found' });
    }
};

export { isauthorized };
