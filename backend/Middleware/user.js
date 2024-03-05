
const {  admin } = require('../DB/db');
const { auth } = require('../Zod/blogSchema');



const userMiddleware = async (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const usernameResponse = auth.username.safeParse(username);
    const passwordResponse = auth.password.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success  ||
        !username || !password) {
        return res.status(411).json({
            message: "Incorrect email and pass"
        });
    }

    try {
        const value = await admin.findOne({ username: username, password: password });
        
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "user doesn't exist"
            });
        }
    } catch (error) {
        console.error("Error finding admin:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = userMiddleware;

