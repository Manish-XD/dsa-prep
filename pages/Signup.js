import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { array } from "../constants/array";

const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleChange(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "name") {
            setName(e.target.value);
        }
    }

    async function handleSubmit(e)
    {
        e.preventDefault();
        const data = { name, email, password };
        let res = await fetch(`http://localhost:3000/api/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let response = await res.json();
          if(response.success)
          {
            handleLogin();
          }
    }

    async function handleLogin()
    {
        const data = { email, password };
        let res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let response = await res.json();
          if(response.success)
          {
            handleAuth(response);
          }
    }

    async function handleAuth(response)
    {
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
          if(key)
          {
            localStorage.setItem('key', key);
            handleLinkAd(key);
          }
    }

    async function handleLinkAd(key)
    {
        const data = {user: key, array: array};
        let res = await fetch(`http://localhost:3000/api/linkAdDb`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          let response = await res.json();
          if(response.success)
          {
            router.push('/Home');
          }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleChange} name="name"/>
            <input value={email} onChange={handleChange} name="email"/>
            <input value={password} onChange={handleChange} name="password"/>
            <button type="submit">sign up</button>
        </form>
        <Link href="/">Log in</Link>
        </div>
    )
}

export default Signup