import Link from 'next/link';
import { GrUserAdmin } from 'react-icons/gr';
const Login = () => {
    return <>
        <div className="row">
            <div className="col-sm-4 offset-4 mt-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-sm-12">
                            <div className="card-body">
                                <h1 className="card-title text-center pink-500"><GrUserAdmin color='pink'/></h1>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="username">Username:</lavel>
                                    <input className="form-control" id="username" type='text' name="username" placeholder="Username" required></input>
                                </div>
                                <div className="form-group mb-3">
                                    <lavel htmlFor="password">Password:</lavel>
                                    <input className="form-control" id="password" type="password" name="password" placeholder="Password" required></input>
                                </div>
                                <div className="form-group mb-3 d-flex justify-content-between">
                                    <span>
                                        <input type="checkbox" className="form-check-input" id='exampleCheck1'/>
                                        <label class="form-check-label ms-2" for="exampleCheck1">Remember me</label>
                                    </span>
                                    <Link href="/forgote-password">Forgote Password</Link>
                                </div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-success w-100">LOG IN</button>
                                </div>
                                <div className="form-group mb-3">
                                    <span>
                                        Don't have account?<Link href='/user-registration'> click here </Link>to create new account
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Login;