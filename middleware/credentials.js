import { includes } from '../config/allowedOrigins';

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (includes(origin)) {
        res.header('Access-Control-Allowed-Credentials', true);
    }
    next();
}

export default credentials