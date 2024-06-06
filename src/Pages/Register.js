import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Register() {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUser] = useState("");
    const [cprating,setRating] = useState("");
    const [userlanguage,setLanguage] = useState("");
    const navigate = useNavigate();

    async function signUp(){
        
        const item ={name,email,password,username,cprating,userlanguage};
        let result=await fetch({
            method:'',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json();
        localStorage.setItem("storage-name",JSON.stringify(result));
        navigate("/home");
    }
    return (
        <>
            <div className="home_button"><a href="/">Back</a></div>
            <div className="new_css">
                <div className="form">
                    <h1 className="heading">Register</h1>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" autocomplete="on" className="name" required />
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" autocomplete="on" className="email" required />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" autocomplete="off" className="email" required />
                    <input type="text" value={username} onChange={(e)=>setUser(e.target.value)} placeholder="Username" autocomplete="off" className="userName" required />
                    <input type="text" value={cprating} onChange={(e)=>setRating(e.target.value)} placeholder="CP Rating" autocomplete="of" className="CPRating" />
                    <input type="text" value={userlanguage} onChange={(e)=>setLanguage(e.target.value)} placeholder="Fav Language" autocomplete="of" className="CPRating" />
                    <button className="submit-btn" onClick={signUp}>Register</button>
                    <a href="login" className="link">Already have an account? Login</a>
                </div>
            </div>
        </>
    )
}
