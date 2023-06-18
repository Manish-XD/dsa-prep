var jwt = require('jsonwebtoken');

export default function handler(req, res) {
  if (req.method == 'POST') {
    const token = req.headers.bearer;
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      console.log(typeof(token));
      const decoded = jwt.verify(token, 'jwtsecret');
      console.log(decoded);
      res.status(200).json({ message: 'Token content retrieved successfully', data: [decoded] });
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized 2' });
    }
  }
}



