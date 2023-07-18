import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const Home = () => {
    const router = useRouter();
    const [data, setData] = useState();
    const [abc, setAbc] = useState(null);
    useEffect(() => {
        const key = localStorage.getItem('key');
        setAbc(key);
        if (key) {
            getUserQuestions(key);
        }
        else
        {
            router.push('/');
        }
    }, [])
    async function getUserQuestions (token)
    {
        try {
            let res = await fetch('http://localhost:3000/api/getAdQues', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: token})
            });
            if(res.status)
            {
                const response = await res.json();
                console.log(response.data.array);
                setData(response.data.array);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function handleStatus(id)
    {
        console.log(id, abc);
        try {
            let res = await fetch('http://localhost:3000/api/updateAdQues', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: abc, arrayItemId: id})
            })
            if(res.status)
            {
                const response = await res.json();
                console.log(response.data.array);
                setData(response.data.array);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
            <div>
                {data && data.map((ques)=>{
                    return(
                            <div key={ques.id}>
                                <p>{ques.id}</p>
                                <p>{ques.title}</p>
                                <button style={{background: ques.status ? 'green' : 'red', padding: '1rem'}} onClick={handleStatus.bind(this, ques.id)}></button>
                            </div>
                    )
                })}
            </div>
    )
}

export default Home