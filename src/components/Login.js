import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [data, setData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            email: email,
            pass: pass
        };
        setData([...data, newData]);
        console.log(newData)
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='pass' value={pass} onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            <div className='container'>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">SELECT</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PASSWORD</th>
                        </tr>
                    </thead>
                    {data.map((curr) => {
                        return (
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>{curr.email}</td>
                                    <td>{curr.pass}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Login
