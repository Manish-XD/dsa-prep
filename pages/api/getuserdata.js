import User from "../../models/Users";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const email = req.body.email;
  
    try {
      // Query the user based on the email ID
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return the user data
      res.status(200).json(user);
    } catch (error) {
      console.error('Error retrieving user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
  
  
  
  
  