import {getSession, useSession, usesSession} from "next-auth/react"

const home2=()=>{
    const {data: session,status}=useSession()
    if(status==='authenticated')
    {
        return(<div><h1>{session.user.name}</h1></div>)
    }
    else
    {
        return(<div><h1>Hello</h1></div>)
    }
}



export const getServerSideProps=async (context) =>{
    const session =await getSession(context);
    if(!session){
        return {
            redirect:{
                destination:'/'
            }
        }
    }
    return {
        props:{session}
    }
}
export default home2