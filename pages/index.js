import Link from 'next/link'
import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleChange (e)
    {
        if (e.target.name === "email") {
            setEmail(e.target.value);
          } else if (e.target.name === "password") {
            setPassword(e.target.value);
          }
    }
  return (
    <div>
        <input/>
        <input/>
        <Link href='/Signup'>Signup</Link>
    </div>
  )
}
