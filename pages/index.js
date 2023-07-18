import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
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

    async function handleSubmit(e)
    {
        e.preventDefault();
        const data = { email, password };
        let res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let response = await res.json();
          console.log(response.token);
          let auth = await fetch(`http://localhost:3000/api/auth`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Bearer": response.token
            }
          });
          let authData = await auth.json();
          console.log(authData.data[0].id);
          const key = authData.data[0].id;
          localStorage.setItem('key', key);
          router.push('/Home');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input name="email" value={email} onChange={handleChange}/>
        <input name="password" value={password} onChange={handleChange}/>
        <button type="submit">login</button>
        </form>
        <Link href='/Signup'>Signup</Link>
    </div>
  )
}
