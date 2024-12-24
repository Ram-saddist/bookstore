import React,{useState} from 'react'
import axios from 'axios'
export default function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')

    function register(e){
        e.preventDefault()
        axios.post("http://localhost:5000/api/auth/register",{name,email,password,mobile})
            .then((res)=>{
                console.log(res)
            })
    }

    return (
        <div className='container mt-4'>
            <div className="row">
                <form onSubmit={register} className='col-6'>
                <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name </label>
                        <input type="text" className="form-control" id="exampleInputName" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputMobile" className="form-label">Mobile Number </label>
                        <input type="text" className="form-control" onChange={(e)=>setMobile(e.target.value)}
                        id="exampleInexampleInputMobileputName" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
