var jwt = require('jsonwebtoken');

const fetchUser = handler => async (req,res, next) => {
    const token = req.header.token;
    if(!token)
    {
        res.status(401).send({error: "please authenticate"})
    }
    try {        
        const data = jwt.verify(token, "secret123");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate 2"});
    }
}

export default fetchUser;