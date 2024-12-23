import React,{useState} from 'react'
import axios from 'axios'
export default function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    function register(){

    }
    return (
        <div className='container mt-4'>
            <div className="row">
                <form onSubmit={register} className='col-6'>
                <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name </label>
                        <input type="text" class="form-control" id="exampleInputName" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputMobile" class="form-label">Mobile Number </label>
                        <input type="text" class="form-control" onChange={(e)=>setMobile(e.target.value)}
                        id="exampleInexampleInputMobileputName" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
